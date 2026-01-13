import React from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <p className="Dev">&lt;DevPortfolio /&gt;</p>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skill</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
