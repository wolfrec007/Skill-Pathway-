import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Home = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">

        {/* ================= HERO ================= */}
        <header className="learning-header">
          <h1 className="section-heading">
            Welcome
          </h1>
          <p className="section-description">
            Learn technology from first principles — not trends, not hype.
          </p>
        </header>

        <div className="learning-block">
          <p>
            This platform is built for learners who want strong fundamentals
            before jumping into tools, frameworks, or certifications.
          </p>
        </div>

        {/* ================= LEARNING TRACKS ================= */}
        <div className="learning-block">
          <h2>Learning Tracks</h2>
          <p>Choose a topic to start learning:</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a href="/backend" className="button glass">Backend</a>
            <a href="/linux" className="button glass">Linux</a>
            <a href="/python" className="button glass">Python</a>
            <a href="/web" className="button glass">Web Basics</a>
            <a href="/cyber" className="button glass">Cybersecurity</a>
            <a href="/go" className="button glass">Go (Golang)</a>
          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <div className="learning-block" id="about">
          <h2>About</h2>

          <p>
            Most learning platforms teach <em>what to use</em>.
            This platform focuses on <strong>why things work</strong>.
          </p>

          <p>
            The goal is to help learners:
          </p>

          <ul>
            <li>Build strong foundations</li>
            <li>Understand systems end-to-end</li>
            <li>Learn with clarity and confidence</li>
          </ul>

          <p>
            If you’re serious about learning fundamentals,
            you’re in the right place.
          </p>

          {/* ================= CONTACT LINKS ================= */}
          <h3 style={{ marginTop: '24px' }}>Connect</h3>

          <ul>
            <li>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME
              </a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:yourmail@example.com">
                yourmail@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* ================= FEEDBACK FORM ================= */}
        <div className="learning-block">
          <h2>Feedback</h2>
          <p>
            Have suggestions, found an issue, or want to contribute ideas?
            Share your feedback below.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your feedback!')
            }}
          >
            <div style={{ marginBottom: '14px' }}>
              <label>Name</label><br />
              <input
                type="text"
                placeholder="Your name"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label>Email</label><br />
              <input
                type="email"
                placeholder="Your email"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label>Message</label><br />
              <textarea
                placeholder="Your feedback"
                rows="4"
                required
                style={inputStyle}
              />
            </div>

            <button type="submit" className="button glass">
              Submit Feedback
            </button>
          </form>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="learning-block" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>
            Built with a focus on fundamentals · Clear learning paths · No noise
          </p>
        </div>

      </section>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '6px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '14px'
}

export default Home
