import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo-container">
          <img src="/logo.png" alt="Luna Moon Hotel Logo" className="logo-img" />
          <span className="logo-text">LUNA MOON</span>
        </a>
        <nav>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Trang chu
              </a>
            </li>
            <li>
              <a href="#rooms" className="nav-link">
                Phong nghi
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Lien he
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn-book">Dat phong ngay</button>
      </div>
    </header>
  )
}
