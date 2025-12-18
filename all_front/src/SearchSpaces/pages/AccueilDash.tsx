import React, { Component } from 'react'
import Bug from '../assets/logo-removebg-preview.png'
import Slayers from '../assets/logo.png'
import Ordi from '../assets/image12.png'
import '../assets/Accueil.scss'
import { MdAdd, MdAddCircle, MdClearAll, MdDelete, MdMeetingRoom } from 'react-icons/md'
import { BiArrowToLeft, BiArrowToRight, BiCalendar, BiCustomize, BiEditAlt, BiShareAlt, BiTime, BiUserCircle } from 'react-icons/bi'
import { CgSmile, CgSmileMouthOpen } from 'react-icons/cg'
import { BsBagCheck, BsStars } from 'react-icons/bs'

export class AccueilDash extends Component {
  render() {
    return (
      <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">T</div>
          <div className="brand-text">Technolize</div>
        </div>

        <nav className="menu">
          <ul>
            <li className="active">Dashboard</li>
            <li>Organization Management</li>
            <li>Goal & Task Management</li>
            <li>Completion Management</li>
            <li>Integration</li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="theme-toggle">
            <button className="pill">Light</button>
            <button className="pill">Dark</button>
          </div>
        </div>
      </aside>
      
      <main className="main">
        <header className="topbar">
          <div className="breadcrumb">Overview / <strong>Dashboard</strong></div>
          <button className="new-tab">New Tab</button>
        </header>

        <section className="content-wrap">
          <div className="dashboard-card">
            <div className="intro">
              <span className="badge">AI-powered efficiency</span>
              <h1>Welcome to Technolize</h1>
              <p>Achieve your quarterly/yearly goals with AI-powered efficiency, ensuring smarter management and streamlined success.</p>
              <button className="primary">Create New Goal</button>
            </div>

            <aside className="recent">
              <div className="recent-card">
                <h4>Recent Goals</h4>
                <p>Publish case studies to get 25% higher conversion.</p>
              </div>
            </aside>

            <div className="goal-box">
              <div className="goal-top">Define, Align, Achieve: Precision planning powered by AI</div>
              <div className="goal-inner">
                <input placeholder="Type your goal here" />
                <button className="generate">Generate</button>
              </div>
            </div>
            </div>
        </section>
      </main>
      </div>
  )
}
}

export default AccueilDash