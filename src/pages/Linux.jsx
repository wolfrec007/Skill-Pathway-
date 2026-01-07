import React from 'react'
import Navbar from '../components/navbar'
import '../styles/learning.css'

const Linux = () => {
  return (
    <div className="learning-container">
      <Navbar />

      <section className="learning-section">
        <header className="learning-header">
          <h1 className="section-heading">
            Linux Fundamentals
          </h1>
          <p className="section-description">
            Learn Linux from the ground up — the operating system behind servers,
            cloud, DevOps, and cybersecurity.
          </p>
        </header>

        {/* ================= CORE RESOURCE ================= */}
        <div className="learning-block">
          <h2>Core Learning Resource</h2>
          <p>
            This video course covers Linux basics including file systems,
            commands, permissions, processes, and networking.
          </p>

          <a
            href="https://youtu.be/v392lEyM29A"
            target="_blank"
            rel="noreferrer"
            className="button glass"
          >
            ▶ Watch Linux Full Course
          </a>
        </div>

        {/* ================= ROADMAP ================= */}
        <div className="learning-block">
          <h2>1. Introduction to Linux</h2>
          <ul>
            <li>What is Linux?</li>
            <li>Linux kernel vs distributions</li>
            <li>Popular distros (Ubuntu, Debian, Arch)</li>
            <li>Installing Linux (VM / Dual Boot)</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>2. Filesystem & Navigation</h2>
          <ul>
            <li>Filesystem hierarchy (/home, /etc, /var)</li>
            <li>pwd, ls, cd</li>
            <li>Absolute vs relative paths</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>3. Working with Files</h2>
          <ul>
            <li>cp, mv, rm</li>
            <li>cat, less, head, tail</li>
            <li>find, grep</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>4. Users & Permissions</h2>
          <ul>
            <li>Users and groups</li>
            <li>chmod, chown</li>
            <li>sudo and root</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>5. Package Management</h2>
          <ul>
            <li>apt, apt-get</li>
            <li>Installing and updating software</li>
            <li>Removing packages safely</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>6. Processes & Services</h2>
          <ul>
            <li>ps, top, htop</li>
            <li>systemctl</li>
            <li>Background vs foreground processes</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>7. Networking Basics</h2>
          <ul>
            <li>ip, ping, traceroute</li>
            <li>ssh & scp</li>
            <li>Ports and services</li>
          </ul>
        </div>

        <div className="learning-block">
          <h2>8. Bash Scripting (Intro)</h2>
          <ul>
            <li>Shell scripts</li>
            <li>Variables</li>
            <li>Basic loops and conditions</li>
          </ul>
        </div>

        {/* ================= DOCS ================= */}
        <div className="learning-block">
          <h2>Official Documentation & References</h2>
          <ul>
            <li>
              <a
                href="https://help.ubuntu.com/"
                target="_blank"
                rel="noreferrer"
              >
                Ubuntu Documentation
              </a>
            </li>
            <li>
              <a
                href="https://wiki.archlinux.org/"
                target="_blank"
                rel="noreferrer"
              >
                Arch Linux Wiki
              </a>
            </li>
            <li>
              <a
                href="https://training.linuxfoundation.org/resources/free-courses/"
                target="_blank"
                rel="noreferrer"
              >
                Linux Foundation Free Courses
              </a>
            </li>
            <li>
              <a
                href="https://www.gnu.org/software/bash/manual/"
                target="_blank"
                rel="noreferrer"
              >
                Bash Reference Manual
              </a>
            </li>
          </ul>
        </div>

        {/* ================= PRACTICE ================= */}
        <div className="learning-block">
          <h2>Practice Ideas</h2>
          <ul>
            <li>Navigate and manage files via terminal only</li>
            <li>Create users and manage permissions</li>
            <li>Write basic bash scripts</li>
            <li>SSH into a remote machine</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Linux
