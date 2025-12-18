                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            import React, { useState, useEffect, useRef } from 'react'
import Sary from '../assets/user.png'
import { BsEmojiSmile, BsInbox, BsListNested, BsPencilSquare, BsSend } from 'react-icons/bs'
import { BiArchive, BiCircle, BiPen, BiSearch, BiShare, BiX } from 'react-icons/bi'
import { MdCall, MdDelete, MdLabelImportant, MdSmsFailed, MdUploadFile, MdVideoCall } from 'react-icons/md'
import '../assets/Messages.scss'
import User from '../assets/user.png'
import { io } from 'socket.io-client'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const Messages = () => {
  const [showNewMsg, setShowNewMsg] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [showConvEmoji, setShowConvEmoji] = useState(false)
  const [showWriter, setShowWriter] = useState(false)
  const emojiRef = useRef<HTMLDivElement | null>(null)
  const convEmojiRef = useRef<HTMLDivElement | null>(null)
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null)
  const [selectedOtherUser, setSelectedOtherUser] = useState<number | null>(null)
  const [inbox, setInbox] = useState<any[]>([])
  const [messages, setMessages] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [newMessageContent, setNewMessageContent] = useState('')
  const [conversationMessage, setConversationMessage] = useState('')
  const [socket, setSocket] = useState<any>(null)
  const selectedConversationRef = useRef<number | null>(null)

  useEffect(() => {
    const authUser = localStorage.getItem("auth_user")
    if (authUser) {
      const user = JSON.parse(authUser)
      setCurrentUser(user)
      fetchInbox(user.id)
      fetchUsers()
    }

    // Initialize socket
    const token = localStorage.getItem("auth_token")
    const newSocket = io('/', {
      auth: {
        token: token
      }
    })
    setSocket(newSocket)

    newSocket.on('connect', () => {
      console.log('Socket connected:', newSocket.id)
    })

    newSocket.on('disconnect', () => {
      console.log('Socket disconnected')
    })

    newSocket.on('message:new', (data: any) => {
      console.log('New message received:', data)
      if (data.conversation_id === selectedConversation) {
        setMessages((prevMessages) => [...prevMessages, data.message])
      }
    })

    newSocket.on('inbox:update', () => {
      console.log('Inbox update received, refetching inbox')
      if (currentUser) {
        fetchInbox(currentUser.id)
      }
    })

    // Polling fallback every 1 second
    const interval = setInterval(() => {
      if (currentUser) {
        fetchInbox(currentUser.id)
        if (selectedConversationRef.current) {
          // Refetch messages for current conversation
          fetch(`/api/messages/conversation/id/${selectedConversationRef.current}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
            .then(res => res.ok ? res.json() : [])
            .then(data => setMessages(data))
            .catch(err => console.error('Polling error:', err))
        }
      }
    }, 1000)

    return () => {
      newSocket.disconnect()
      clearInterval(interval)
    }
  }, [])

  const fetchInbox = async (userId) => {
    try {
      const token = localStorage.getItem("auth_token")
      const res = await fetch(`/api/messages/inbox/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setInbox(data)
      }
    } catch (error) {
      console.error('Error fetching inbox:', error)
    }
  }

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("auth_token")
      const res = await fetch('/api/users', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setUsers(data)
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const fetchConversation = async (conversationId: any, otherUserId: any) => {
    console.log('Fetching conversation:', conversationId, 'other user:', otherUserId)
    try {
      const token = localStorage.getItem("auth_token")
      const res = await fetch(`/api/messages/conversation/id/${conversationId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log('Response status:', res.status)
      if (res.ok) {
        const data = await res.json()
        console.log('Messages data:', data)
        setMessages(data)
        setSelectedConversation(conversationId)
        selectedConversationRef.current = conversationId
        setSelectedOtherUser(otherUserId)
        setShowWriter(true)
        // Join the conversation room for real-time updates
        if (socket) {
          console.log('Emitting conversation:join for', conversationId)
          socket.emit('conversation:join', conversationId)
        } else {
          console.log('Socket not available for join')
        }
      } else {
        console.error('Failed to fetch conversation:', res.status)
      }
    } catch (error) {
      console.error('Error fetching conversation:', error)
    }
  }

  const sendConversationMessage = async () => {
    if (!selectedOtherUser || !conversationMessage.trim()) return

    try {
      const token = localStorage.getItem("auth_token")
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          sender_id: currentUser.id,
          receiver_id: selectedOtherUser,
          content: conversationMessage
        })
      })
      if (res.ok) {
        setConversationMessage('')
        // Real-time will add the message, no need to refresh
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (query.length > 0) {
      const filtered = users.filter((user: any) =>
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }

  const selectUser = (user: any) => {
    setSelectedUser(user)
    setSearchResults([])
    setSearchQuery(user.username)
  }

  const sendNewMessage = async () => {
    if (!selectedUser || !newMessageContent.trim()) return

    try {
      const token = localStorage.getItem("auth_token")
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          sender_id: currentUser.id,
          receiver_id: selectedUser.id,
          content: newMessageContent
        })
      })
      if (res.ok) {
        setNewMessageContent('')
        setSelectedUser(null)
        setSearchQuery('')
        setShowNewMsg(false)
        fetchInbox(currentUser.id) 
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (emojiRef.current && !emojiRef.current.contains(e.target as Node)) {
        setShowEmoji(false)
      }
      if (convEmojiRef.current && !convEmojiRef.current.contains(e.target as Node)) {
        setShowConvEmoji(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className='Messages'>
      <div className="side">
        <div className="navigation">
          <div className="navs active tlm">
            <div className="icon">
              <BsInbox />
            </div>
            <p>Tous les messages</p>
          </div>
          <div className="navs">
            <div className="icon">
              <BsSend />
            </div>
            <p>Envoyé</p>
          </div>
          <div className="navs">
            <div className="icon">
              <BiPen />
            </div>
            <p>Brouillon</p>
          </div>
          <div className="navs">
            <div className="icon">
              <MdSmsFailed />
            </div>
            <p>Non envoyé</p>
          </div>
          <div className="navs">
            <div className="icon">
              <BsInbox />
            </div>
            <p>Spam</p>
          </div>
          <div className="navs">
            <div className="icon">
              <BiArchive />
            </div>
            <p>Archive</p>
          </div>
        </div>
        <div className="membres">
          <div className="title">
            <h3>Membres</h3>
          </div>
          <div className="listes">
            {users.map(user => (
              <div key={user.id} className="membre">
                <div className="profil">
                  <div className="img">
                    <img src={User} alt="" />
                  </div>
                  <p>{user.username}</p>
                </div>
                <div className="status">
                  <p></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="containerMsg">
        <div className="headers">
          <div className="srch">
            <BiSearch />
          </div>
          <div className="search">
            <input type="search" name="" id="" placeholder='rechercher une personne ou message ......' />
            <BiSearch className='icon'/>
          </div>
          <div className="nbr">
            <p>Nombres des messages :</p>
            <span>{inbox.length}</span>
            <BsListNested className='icon'/>
          </div>
        </div>
        <div className="btn_new" onClick={() => setShowNewMsg(true)}>
          <div className="new">
            <BsPencilSquare className='icon'/>
            <p>Nouveaux messages</p>
          </div>
        </div>
        <div className="content">
          <div className="head">
            <div className="navs">
              <div className="icon">
                <BsInbox />
              </div>
              <p>Tous les messages</p>
            </div>
            <div className="outils">
              <div className="delete">
                <MdDelete />
                <p>Supprimer</p>
              </div>
            </div>
          </div>
          <div className="contenu">
            {inbox.map((item: any) => (
              <div key={item.conversation_id} className="listes" onClick={() => fetchConversation(item.conversation_id, item.other_user_id)} >
                <div className="" style={{display:'flex', alignItems:'center', gap:'20px'}}>
                  <div className="check">
                    <p></p>
                  </div>
                  <div className="msg">
                    <div className="photo">
                      <img src={User} alt="" />
                    </div>
                    <div className="contenuListes">
                      <div className="name">
                        <p>{item.other_username || `Conversation ${item.conversation_id}`}</p>
                      </div>
                      <div className="obj">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action">
                  <span className='date'>{new Date(item.created_at).toLocaleTimeString()}</span>
                  <MdDelete title='supprimer'/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="writer_click"
        style={{ display: showWriter ? "flex" : "none" }}
      >
        <div className="containerWriter">
          <div className="header">
            <div className="profil">
              <div className="photo">
                <img src={User} alt="" />
              </div>
              <p className="name"> {selectedConversation}</p>
            </div>
            <div className="call">
              <MdCall />
              <MdVideoCall className='video'/>
              <BiX className="x" onClick={() => setShowWriter(false)}/>
            </div>
          </div>
          <div className="contenu">
            <div className="msg">
              {messages.map(msg => (
                <div key={msg.id} className={msg.sender_id === currentUser?.id ? "envoyer" : "recu"}>
                  <p>{msg.content}</p>
                  <span className='datemsg'>{new Date(msg.created_at).toLocaleTimeString()}</span>
                </div>
              ))}
            </div>
            <div className="writer">
              <textarea
                value={conversationMessage}
                onChange={(e) => setConversationMessage(e.target.value)}
                placeholder='ecrire votre message ....'
              ></textarea>
              <div className="outils" style={{ position: 'relative' }}>
                <div className="insert">
                  <MdUploadFile />
                  <BsEmojiSmile onClick={() => setShowConvEmoji(v => !v)} />
                </div>
                {showConvEmoji && (
                  <div ref={convEmojiRef} style={{ position: 'absolute', bottom: '60px', left: '10px', zIndex: 1000 }}>
                    <Picker data={data} locale="fr" theme="light" onEmojiSelect={(emoji: any) => setConversationMessage(prev => prev + (emoji.native || ''))} />
                  </div>
                )}
                <div className="sender" onClick={sendConversationMessage}>
                  <BsSend />
                  <p>Envoyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="new_msg"
        style={{ display: showNewMsg ? "flex" : "none" }}
      >
        <div className="containerNew">
          <div className="header">
            <p>Nouveau messages</p>
            <BiX className='x' onClick={() => setShowNewMsg(false)}/>
          </div>
          <div className="contenu">
            <div className="inp_search">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder='rechercher un utilisateur ....'
              />
              <BiSearch className='srch'/>
            </div>
            <div className="result">
              {searchResults.map((user: any) => (
                <div key={user.id} className="list" onClick={() => selectUser(user)}>
                  <p className="name">{user.username}</p>
                </div>
              ))}
            </div>
            <div className="vers">
              <div className="profil">
                <div className="to">
                  <p>Vers: </p>
                </div>
                <p className="name">{selectedUser ? selectedUser.username : 'rechercher un utilisateur sur la barre de recherche .....'}</p>
              </div>
            </div>
            <div className="writer">
              <textarea
                value={newMessageContent}
                onChange={(e) => setNewMessageContent(e.target.value)}
                placeholder='ecrire votre message ....'
              ></textarea>
              <div className="outils" style={{ position: 'relative' }}>
                <div className="insert">
                  <MdUploadFile />
                  <BsEmojiSmile onClick={() => setShowEmoji(v => !v)} />
                </div>
                {showEmoji && (
                  <div ref={emojiRef} style={{ position: 'absolute', bottom: '60px', left: '10px', zIndex: 1000 }}>
                    <Picker data={data} locale="fr" theme="light" onEmojiSelect={(emoji: any) => setNewMessageContent(prev => prev + (emoji.native || ''))} />
                  </div>
                )}
                <div className="sender" onClick={sendNewMessage}>
                  <BsSend />
                  <p>Envoyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages