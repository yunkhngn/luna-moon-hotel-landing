import React, { useState, useEffect } from 'react'
import './Hero.css'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
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
          <span className="hero-subtitle">Chào mừng đến với</span>
          <h1 className="hero-title">Trải nghiệm nghỉ dưỡng hoàn hảo</h1>
          <p className="hero-description">
            Khám phá vẻ đẹp sang trọng và không gian ấm cúng tại Luna Moon Hotel. Nơi mọi chi
            tiết đều được chăm chút để mang lại kỳ nghỉ tuyệt vời nhất cho bạn.
          </p>
          <a href="#rooms" className="btn-primary">
            Khám phá ngay
          </a>
        </div>
      </div>
    </section>
  )
}
