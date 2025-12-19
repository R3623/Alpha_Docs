import React, { Component } from 'react'
import '../assets/Accueil.scss'
import { MdPictureAsPdf, MdImage, MdVideoLibrary, MdVerified } from 'react-icons/md'
import { BiLoader, BiCheckCircle } from 'react-icons/bi'
import { BsFileText, BsShieldCheck } from 'react-icons/bs'
import axios from 'axios'
import { mockSearchData } from '../data/mockSearch'

interface AccueilDashState {
  showResult: boolean;
  inputValue: string;
  loading: boolean;
  searchResults: SearchResult | null;
  summaryText: string;
  isTyping: boolean;
}

interface SearchResult {
  summary: string;
  sources: Source[];
  images: MediaItem[];
  videos: MediaItem[];
  pdfs: PdfItem[];
}

interface Source {
  name: string;
  url: string;
  verified: boolean;
}

interface MediaItem {
  url: string;
  title: string;
  source: string;
}

interface PdfItem {
  title: string;
  url: string;
  pages: number;
  source: string;
}

export class AccueilDash extends Component<{}, AccueilDashState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showResult: false,
      inputValue: '',
      loading: false,
      searchResults: null,
      summaryText: '',
      isTyping: false
    };
  }

  handleGenerate = async () => {
    const { inputValue } = this.state;

    if (!inputValue.trim()) {
      alert('Veuillez entrer une recherche');
      return;
    }

    this.setState({ showResult: true, loading: true });

    if (inputValue.toLowerCase() === 'python' || inputValue.toLowerCase() === 'react') {
      setTimeout(() => {
        this.setState({
          loading: false,
          searchResults: mockSearchData[inputValue.toLowerCase()]
        }, () => {
          setTimeout(() => {
            this.startTyping();
          }, 500); 
        });
      }, 2000); 
      return;
    }

    try {
      const response = await axios.post('/api/ai-search/', {
        query: inputValue
      });

      const searchResults: SearchResult = response.data;

      this.setState({
        loading: false,
        searchResults: searchResults
      });

    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      this.setState({
        loading: false,
        searchResults: {
          summary: 'Une erreur est survenue lors de la recherche. Veuillez réessayer.',
          sources: [],
          images: [],
          videos: [],
          pdfs: []
        }
      });
    }
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.handleGenerate();
    }
  };

  handleDownload = () => {
    // Simuler le téléchargement
    setTimeout(() => {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Téléchargement réussi');
      } else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('Téléchargement réussi');
          } else {
            alert('Téléchargement réussi');
          }
        });
      } else {
        alert('Téléchargement réussi');
      }
    }, 1000); // Simuler un délai de téléchargement
  };

  startTyping = () => {
    const fullText = this.state.searchResults?.summary || '';
    this.setState({ isTyping: true, summaryText: '' });
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        this.setState(prevState => ({
          summaryText: prevState.summaryText + fullText[index]
        }));
        index++;
      } else {
        clearInterval(interval);
        this.setState({ isTyping: false });
      }
    }, 5); // Vitesse de frappe
  };

  render() {
    const { showResult, inputValue, loading, searchResults, summaryText, isTyping } = this.state;

    return (
      <div className="app">
        <aside className="sdb">
          <div className="brand">
            <div className="brand-text">
              <BsShieldCheck style={{ display: 'inline', marginRight: '8px' }} />
              Recherche Vérifiée
            </div>
          </div>

          <nav className="menu">
            <ul>
              <li className="active">Historique de recherche</li>
              <li>Sources officielles</li>
              <li>Documents sauvegardés</li>
              <li>Favoris</li>
              <li>Paramètres</li>
            </ul>
          </nav>
        </aside>
        
        <main className="main">
          <header className="topbar">
            <div className="breadcrumb">
              Recherche / <strong>Documents Officiels</strong>
            </div>
            <button className="new-tab">Nouvelle recherche</button>
          </header>

          <section className="content-wrap">
            <div className="dashboard-card">
              <div className={`bla ${showResult ? 'hidden' : ''}`}>
                <div className="intro">
                  <span className="badge">
                    <MdVerified style={{ display: 'inline', marginRight: '4px' }} />
                    Sources 100% vérifiées
                  </span>
                  <h1>Recherche dans les documents officiels</h1>
                  <p>
                    Accédez à des informations fiables issues uniquement de documentations officielles.
                    Notre IA parcourt et vérifie chaque source pour vous garantir une information sans désinformation.
                  </p>
                </div>
              </div>

              <div className="goal-box">
                <div className="goal-top">
                  Recherchez dans les documentations officielles - Zéro désinformation
                </div>
                <div className="goal-inner">
                  <input 
                    placeholder="Ex: React hooks, Python async, Node.js streams..." 
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress}
                    disabled={loading}
                  />
                  <button 
                    className="generate" 
                    onClick={this.handleGenerate}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <BiLoader className="spin-icon" /> Recherche...
                      </>
                    ) : (
                      'Rechercher'
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className={`result ${showResult ? 'expanded' : ''}`}>
              {showResult && (
                <div className="result-content">
                  {loading ? (
                    <div className="loading-state">
                      <BiLoader className="spin-icon-large" />
                      <p>Analyse des documents officiels en cours...</p>
                      <p className="sub-text">Vérification des sources et compilation des informations</p>
                    </div>
                  ) : searchResults ? (
                    <>
                      <div className="result-header">
                        <h3 className="title">
                          <BiCheckCircle style={{ color: '#10b981', marginRight: '8px' }} />
                          Résultats vérifiés pour: "{inputValue}"
                        </h3>
                        <span className="verified-badge">
                          <MdVerified /> Sources officielles uniquement
                        </span>
                      </div>

                      {/* Résumé */}
                      <div className="summary-section">
                        <h4><BsFileText /> Résumé des informations officielles</h4>
                        <div className="summary-content">
                          {isTyping ? (
                            <span>{summaryText}<span className="cursor">|</span></span>
                          ) : (
                            <span dangerouslySetInnerHTML={{ __html: searchResults.summary }} />
                          )}
                        </div>
                      </div>

                      {/* Sources */}
                      {searchResults.sources.length > 0 && (
                        <div className="sources-section">
                          <h4><MdVerified /> Sources officielles consultées</h4>
                          <div className="sources-list">
                            {searchResults.sources.map((source, index) => (
                              <div key={index} className="source-item">
                                <MdVerified className="verified-icon" />
                                <div>
                                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                                    {source.name}
                                  </a>
                                  <span className="official-tag">Officiel</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Contenu détaillé */}
                      <div className="contentResult">
                        {/* Images */}
                        {searchResults.images.length > 0 && (
                          <div className="media-section images-section">
                            <h4><MdImage /> Images et diagrammes officiels</h4>
                            <div className="media-grid">
                              {searchResults.images.map((image, index) => (
                                <div key={index} className="media-card">
                                  <img src={image.url} alt={image.title} className="media-image" />
                                  <div className="media-info">
                                    <p className="media-title">{image.title}</p>
                                    <p className="media-source">Source: {image.source}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Vidéos */}
                        {searchResults.videos.length > 0 && (
                          <div className="media-section videos-section">
                            <h4><MdVideoLibrary /> Vidéos tutorielles officielles</h4>
                            <div className="media-grid">
                              {searchResults.videos.map((video, index) => (
                                <div key={index} className="media-card">
                                  <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="media-video"
                                  ></iframe>
                                  <div className="media-info">
                                    <p className="media-title">{video.title}</p>
                                    <p className="media-source">Source: {video.source}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* PDFs */}
                        {searchResults.pdfs.length > 0 && (
                          <div className="media-section pdfs-section">
                            <h4><MdPictureAsPdf /> Documentation complète (PDF)</h4>
                            <div className="pdf-list">
                              {searchResults.pdfs.map((pdf, index) => (
                                <div key={index} className="pdf-card">
                                  <div className="pdf-icon">
                                    <MdPictureAsPdf />
                                  </div>
                                  <div className="pdf-info">
                                    <p className="pdf-title">{pdf.title}</p>
                                    <p className="pdf-meta">
                                      {pdf.pages} pages • {pdf.source}
                                    </p>
                                  </div>
                                  <button className="download-btn" onClick={this.handleDownload}>Télécharger</button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="result-footer">
                        <p className="disclaimer">
                          <BsShieldCheck /> Toutes les informations proviennent de sources officielles vérifiées.
                          Aucun contenu promotionnel ou désinformation.
                        </p>
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default AccueilDash
