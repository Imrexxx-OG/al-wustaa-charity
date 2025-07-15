import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false); // Close menu on link click for mobile
  };

  return (
    <header className="header">
      <div className="logo-placeholder">
        <img src="/logo.jpeg" alt="Al-Wustaa Charitable Foundation Logo" />
      </div>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={handleNavClick}>
          About
        </a>
        <a href="#activities" onClick={handleNavClick}>
          Activities
        </a>
        <a href="#book-promo" onClick={handleNavClick}>
          Join Us
        </a>
      </nav>
    </header>
  );
}

export default Header;