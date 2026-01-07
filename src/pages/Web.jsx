import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Web = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">
        <header className="learning-header">
          <h1 className="section-heading">
            Basics of Web Development
          </h1>
          <p className="section-description">
            Learn how the web works and build websites using HTML, CSS, and JavaScript
            from first principles.
          </p>
        </header>

        {/* ================= HOW THE WEB WORKS ================= */}
        <div className="learning-block">
          <h2>1. How the Web Works</h2>
          <ul>
            <li>Client vs Server</li>
            <li>What happens when you open a website?</li>
            <li>DNS, IP address</li>
            <li>HTTP vs HTTPS</li>
          </ul>
        </div>

        {/* ================= HTML ================= */}
        <div className="learning-block">
          <h2>2. HTML — Structure of the Web</h2>
          <ul>
            <li>HTML elements & tags</li>
            <li>Head vs Body</li>
            <li>Links, images, lists</li>
            <li>Forms & inputs</li>
            <li>Semantic HTML</li>
          </ul>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Learn HTML on MDN
          </a>
        </div>

        {/* ================= CSS ================= */}
        <div className="learning-block">
          <h2>3. CSS — Styling the Web</h2>
          <ul>
            <li>Selectors & properties</li>
            <li>Box model</li>
            <li>Flexbox</li>
            <li>CSS Grid</li>
            <li>Responsive design</li>
          </ul>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Learn CSS on MDN
          </a>
        </div>

        {/* ================= JAVASCRIPT ================= */}
        <div className="learning-block">
          <h2>4. JavaScript — Interactivity</h2>
          <ul>
            <li>Variables & data types</li>
            <li>Functions</li>
            <li>Events</li>
            <li>DOM manipulation</li>
            <li>Fetch API (intro)</li>
          </ul>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Learn JavaScript on MDN
          </a>
        </div>

        {/* ================= PRACTICE ================= */}
        <div className="learning-block">
          <h2>5. Practice Platforms</h2>
          <ul>
            <li>freeCodeCamp — guided practice</li>
            <li>CodePen — experiment with code</li>
            <li>Frontend Mentor — real-world UI challenges</li>
          </ul>

          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Practice on freeCodeCamp
          </a>
        </div>

        {/* ================= TOOLS ================= */}
        <div className="learning-block">
          <h2>6. Developer Tools</h2>
          <ul>
            <li>VS Code</li>
            <li>Browser DevTools</li>
            <li>Live Server</li>
            <li>Basic Git & GitHub</li>
          </ul>
        </div>

        {/* ================= PROJECTS ================= */}
        <div className="learning-block">
          <h2>Beginner Projects</h2>
          <ul>
            <li>Personal portfolio website</li>
            <li>Landing page</li>
            <li>To-do list (HTML + JS)</li>
            <li>Responsive blog layout</li>
          </ul>
        </div>

        {/* ================= NEXT ================= */}
        <div className="learning-block">
          <h2>What to Learn Next</h2>
          <ul>
            <li>Backend fundamentals</li>
            <li>Web security basics</li>
            <li>Frontend frameworks</li>
            <li>Deployment</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Web
