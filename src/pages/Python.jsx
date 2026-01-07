import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Python = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">
        <header className="learning-header">
          <h1 className="section-heading">
            Python Programming
          </h1>
          <p className="section-description">
            Learn Python from fundamentals to object-oriented programming
            and GUI development.
          </p>
        </header>

        {/* ================= CORE RESOURCE ================= */}
        <div className="learning-block">
          <h2>Core Learning Resource</h2>
          <p>
            This course teaches Python from basics, covering syntax,
            control flow, functions, OOP, and real-world use cases.
          </p>

          <a
            href="https://www.youtube.com/watch?v=rfscVS0vtbw"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Watch Python Full Course
          </a>
        </div>

        {/* ================= PYTHON BASICS ================= */}
        <div className="learning-block">
          <h2>1. Python Fundamentals</h2>
          <ul>
            <li>Installing Python & running scripts</li>
            <li>Variables & data types</li>
            <li>Input & output</li>
            <li>Conditional statements</li>
            <li>Loops (for / while)</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>2. Data Structures</h2>
          <ul>
            <li>Lists, tuples</li>
            <li>Dictionaries & sets</li>
            <li>Indexing & slicing</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>3. Functions & Modules</h2>
          <ul>
            <li>Defining functions</li>
            <li>Arguments & return values</li>
            <li>Importing modules</li>
            <li>Virtual environments</li>
          </ul>
        </div>

        {/* ================= OOPS ================= */}
        <div className="learning-block">
          <h2>4. Object-Oriented Programming (OOP)</h2>
          <ul>
            <li>Classes & objects</li>
            <li>Constructors</li>
            <li>Inheritance</li>
            <li>Encapsulation</li>
            <li>Polymorphism</li>
          </ul>
        </div>

        {/* ================= ADVANCED ================= */}
        <div className="learning-block">
          <h2>5. Working with Files & Errors</h2>
          <ul>
            <li>Reading & writing files</li>
            <li>Exception handling</li>
            <li>Logging basics</li>
          </ul>
        </div>

        {/* ================= GUI ================= */}
        <div className="learning-block">
          <h2>6. GUI Development (Introduction)</h2>
          <ul>
            <li>What is a GUI?</li>
            <li>Intro to Tkinter</li>
            <li>Buttons, labels, inputs</li>
            <li>Event handling</li>
          </ul>
        </div>

        {/* ================= DOCS ================= */}
        <div className="learning-block">
          <h2>Official Documentation & References</h2>
          <ul>
            <li>
              <a
                href="https://docs.python.org/3/"
                target="_blank"
                rel="noreferrer"
              >
                Python Official Documentation
              </a>
            </li>
            <li>
              <a
                href="https://realpython.com/"
                target="_blank"
                rel="noreferrer"
              >
                Real Python
              </a>
            </li>
            <li>
              <a
                href="https://docs.python.org/3/library/tkinter.html"
                target="_blank"
                rel="noreferrer"
              >
                Tkinter Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* ================= PRACTICE ================= */}
        <div className="learning-block">
          <h2>Practice Projects</h2>
          <ul>
            <li>CLI calculator</li>
            <li>File organizer script</li>
            <li>Password generator</li>
            <li>Basic GUI application</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Python
