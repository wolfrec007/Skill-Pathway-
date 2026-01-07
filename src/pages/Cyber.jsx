import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Cyber = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">
        <header className="learning-header">
          <h1 className="section-heading">
            Cybersecurity Fundamentals
          </h1>
          <p className="section-description">
            Learn cybersecurity step by step using hands-on platforms and
            real-world attack–defense concepts.
          </p>
        </header>

        {/* ================= INTRO ================= */}
        <div className="learning-block">
          <h2>What is Cybersecurity?</h2>
          <ul>
            <li>Protecting systems, networks, and data</li>
            <li>Understanding threats and vulnerabilities</li>
            <li>Ethical hacking vs malicious hacking</li>
          </ul>
        </div>

        {/* ================= FOUNDATIONS ================= */}
        <div className="learning-block">
          <h2>1. Core Foundations</h2>
          <ul>
            <li>Basic networking (IP, ports, protocols)</li>
            <li>Linux fundamentals</li>
            <li>How the web works (HTTP, cookies, sessions)</li>
          </ul>
        </div>

        {/* ================= WEB SECURITY ================= */}
        <div className="learning-block">
          <h2>2. Web Security Basics</h2>
          <ul>
            <li>OWASP Top 10 overview</li>
            <li>SQL Injection</li>
            <li>Cross-Site Scripting (XSS)</li>
            <li>Authentication flaws</li>
          </ul>
        </div>

        {/* ================= PRACTICE PLATFORMS ================= */}
        <div className="learning-block">
          <h2>Hands-on Practice Platforms</h2>

          <p>
            These platforms form the core of your cybersecurity learning journey.
            Use them in the order shown below.
          </p>

          <ul>
            <li>
              <strong>TryHackMe (THM)</strong> – Guided learning paths for beginners
            </li>
            <li>
              <strong>picoCTF</strong> – Capture The Flag challenges to build problem-solving skills
            </li>
            <li>
              <strong>Hack The Box (HTB)</strong> – Real-world penetration testing labs
            </li>
          </ul>

          <a
            href="https://tryhackme.com"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Start with TryHackMe
          </a>

          <br /><br />

          <a
            href="https://picoctf.org"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Practice on picoCTF
          </a>

          <br /><br />

          <a
            href="https://www.hackthebox.com"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Move to Hack The Box
          </a>
        </div>

        {/* ================= LEARNING FLOW ================= */}
        <div className="learning-block">
          <h2>Recommended Learning Flow</h2>
          <ul>
            <li>Start with beginner paths on TryHackMe</li>
            <li>Solve picoCTF challenges alongside learning</li>
            <li>Transition to Hack The Box for advanced labs</li>
          </ul>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="learning-block">
          <h2>Skills You Will Develop</h2>
          <ul>
            <li>Vulnerability identification</li>
            <li>Exploitation basics</li>
            <li>Linux & networking confidence</li>
            <li>Security mindset</li>
          </ul>
        </div>

        {/* ================= CAREER PATHS ================= */}
        <div className="learning-block">
          <h2>Cybersecurity Career Paths</h2>
          <ul>
            <li>Penetration Tester</li>
            <li>Security Analyst</li>
            <li>SOC Analyst</li>
            <li>Red Team / Blue Team</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Cyber
