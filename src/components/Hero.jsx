import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ padding: 0 }}>
      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">Chao mung den voi</span>
          <h1 className="hero-title">Trai nghiem nghi duong hoan hao</h1>
          <p className="hero-description">
            Kham pha ve dep sang trong va khong gian am cung tai Luna Moon Hotel. Noi moi chi
            tiet deu duoc cham chut de mang lai ky nghi tuyet voi nhat cho ban.
          </p>
          <a href="#rooms" className="btn-primary">
            Kham pha ngay
          </a>
        </div>
      </div>
    </section>
  )
}
