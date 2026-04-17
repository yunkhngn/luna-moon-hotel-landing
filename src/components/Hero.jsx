import React, { useState, useEffect } from 'react'
import './Hero.css'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?q=80&w=1920&auto=format&fit=crop&fm=jpg',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop&fm=jpg',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop&fm=jpg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="hero"
      style={{
        padding: 0,
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.3)), url('${HERO_IMAGES[currentImage]}')`,
      }}
    >
      <div style={{ display: 'none' }}>
        {HERO_IMAGES.map((src) => (
          <img key={src} src={src} alt="preload" />
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-stars">★★★★★</div>
          <span className="hero-subtitle">Chào mừng đến với Luna Moon</span>
          <h1 className="hero-title">Kiến tạo kỳ nghỉ đẳng cấp thượng lưu</h1>
          <p className="hero-description">
            Đắm mình trong không gian sang trọng bậc nhất giữa lòng vịnh biển Nha Trang. Nơi tôn
            vinh những giá trị nghỉ dưỡng đích thực và dịch vụ tận tâm cá nhân hóa cho riêng bạn.
          </p>
          <div className="hero-actions">
            <a href="#rooms" className="btn-primary">
              Đặt phòng ngay
            </a>
            <a href="#rooms" className="btn-secondary">
              Khám phá dịch vụ
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>SCROLL</span>
      </div>
    </section>
  )
}
