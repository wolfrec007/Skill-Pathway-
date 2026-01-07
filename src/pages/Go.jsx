import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Go = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">
        <header className="learning-header">
          <h1 className="section-heading">
            Go (Golang) Programming
          </h1>
          <p className="section-description">
            Learn Go from first principles — a fast, simple, and powerful
            language designed for backend systems and cloud-native applications.
          </p>
        </header>

        {/* ================= CORE RESOURCE ================= */}
        <div className="learning-block">
          <h2>Core Learning Resource</h2>
          <p>
            This course teaches Go fundamentals including syntax, data types,
            concurrency, and building real backend programs.
          </p>

          <a
            href="https://youtu.be/DCU9GkggAPg"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Watch Go Full Course
          </a>
        </div>

        {/* ================= BASICS ================= */}
        <div className="learning-block">
          <h2>1. Go Fundamentals</h2>
          <ul>
            <li>Installing Go & setting up environment</li>
            <li>Go workspace & project structure</li>
            <li>Variables, constants</li>
            <li>Data types</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>2. Control Flow</h2>
          <ul>
            <li>if / else</li>
            <li>for loops (single loop style)</li>
            <li>switch statements</li>
          </ul>
        </div>

        {/* ================= DATA STRUCTURES ================= */}
        <div className="learning-block">
          <h2>3. Data Structures</h2>
          <ul>
            <li>Arrays & slices</li>
            <li>Maps</li>
            <li>Structs</li>
          </ul>
        </div>

        {/* ================= FUNCTIONS ================= */}
        <div className="learning-block">
          <h2>4. Functions & Packages</h2>
          <ul>
            <li>Functions & return values</li>
            <li>Multiple return values</li>
            <li>Packages & imports</li>
            <li>Standard library overview</li>
          </ul>
        </div>

        {/* ================= POINTERS ================= */}
        <div className="learning-block">
          <h2>5. Pointers & Memory</h2>
          <ul>
            <li>Understanding pointers</li>
            <li>Pass by value vs reference</li>
            <li>Why Go uses pointers</li>
          </ul>
        </div>

        {/* ================= CONCURRENCY ================= */}
        <div className="learning-block">
          <h2>6. Concurrency in Go</h2>
          <ul>
            <li>Goroutines</li>
            <li>Channels</li>
            <li>Basic concurrency patterns</li>
          </ul>
        </div>

        {/* ================= FILES ================= */}
        <div className="learning-block">
          <h2>7. Working with Files</h2>
          <ul>
            <li>Reading files</li>
            <li>Writing files</li>
            <li>Error handling</li>
          </ul>
        </div>

        {/* ================= BACKEND INTRO ================= */}
        <div className="learning-block">
          <h2>8. Go for Backend Development</h2>
          <ul>
            <li>Building a simple HTTP server</li>
            <li>Handling requests & responses</li>
            <li>Why Go is popular for backend systems</li>
          </ul>
        </div>

        {/* ================= DOCS ================= */}
        <div className="learning-block">
          <h2>Official Documentation & References</h2>
          <ul>
            <li>
              <a
                href="https://go.dev/doc/"
                target="_blank"
                rel="noreferrer"
              >
                Go Official Documentation
              </a>
            </li>
            <li>
              <a
                href="https://pkg.go.dev/std"
                target="_blank"
                rel="noreferrer"
              >
                Go Standard Library
              </a>
            </li>
            <li>
              <a
                href="https://tour.golang.org/"
                target="_blank"
                rel="noreferrer"
              >
                A Tour of Go
              </a>
            </li>
          </ul>
        </div>

        {/* ================= PRACTICE ================= */}
        <div className="learning-block">
          <h2>Practice Projects</h2>
          <ul>
            <li>CLI tool in Go</li>
            <li>File processing program</li>
            <li>Simple REST API in Go</li>
            <li>Concurrent worker program</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Go
