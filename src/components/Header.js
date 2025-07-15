import React from 'react';

function Header() {
  return (
    <header className="header">
      {/* <h1 className="header-title">Al-Wustaa Charitable Foundation</h1> */}
      <div className="logo-placeholder">
        <img src="/logo.jpeg" alt="Al-Wustaa Charitable Foundation Logo" />
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#activities">Activities</a>
        <a href="#book-promo">Join Us</a>
      </nav>
    </header>
  );
}

export default Header;