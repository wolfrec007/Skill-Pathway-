
import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Backend = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">
        <header className="learning-header">
          <h1 className="section-heading">
            Backend from First Principles
          </h1>
          <p className="section-description">
            Learn how backend systems work from the ground up — before touching frameworks.
          </p>
        </header>

        {/* ================= CORE RESOURCE ================= */}
        <div className="learning-block">
          <h2>Core Learning Resource</h2>
          <p>
            This playlist explains backend concepts like HTTP, routing,
            serialization, databases, authentication, and scalability
            from first principles.
          </p>

          <a
            href="https://youtube.com/playlist?list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Watch Backend Playlist
          </a>
        </div>

        {/* ================= ROADMAP ================= */}
        <div className="learning-block">
          <h2>What You Will Learn</h2>
          <ul>
            <li>Client–Server architecture</li>
            <li>HTTP methods, headers, status codes</li>
            <li>REST APIs & routing</li>
            <li>Request lifecycle & middleware</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>Application Architecture</h2>
          <ul>
            <li>Controllers, services & business logic</li>
            <li>Layered architecture</li>
            <li>Error handling strategies</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>Data & Persistence</h2>
          <ul>
            <li>Relational vs NoSQL databases</li>
            <li>Data modeling</li>
            <li>CRUD operations</li>
            <li>Indexes & basic optimization</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>Security & Authentication</h2>
          <ul>
            <li>Authentication vs Authorization</li>
            <li>Sessions & JWT</li>
            <li>Input validation</li>
            <li>Secure defaults</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>Scalability & Reliability</h2>
          <ul>
            <li>Logging & monitoring basics</li>
            <li>Handling failures</li>
            <li>Performance considerations</li>
          </ul>
        </div>

        {/* ================= PROJECTS ================= */}
        <div className="learning-block">
          <h2>Practice Projects</h2>
          <ul>
            <li>Build a REST API for a blog</li>
            <li>User authentication system</li>
            <li>Task management backend</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Backend
