import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(o => !o)

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <div className="brand">Terrence Sardin</div>
        <button className="nav-toggle" onClick={handleToggle} aria-expanded={open} aria-label="Toggle navigation">
          ☰
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
