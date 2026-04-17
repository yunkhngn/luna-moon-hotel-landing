import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-container">
              <img src="/logo.png" alt="Luna Moon Hotel" className="footer-logo" />
              <h2 className="luxury-font" style={{ color: 'white', margin: 0 }}>LUNA MOON</h2>
            </div>
            <p>
              Tọa lạc tại vịnh biển Nha Trang xinh đẹp, Luna Moon Hotel mang đến không gian nghỉ
              dưỡng sang trọng, kết hợp giữa kiến trúc hiện đại và dịch vụ tận tâm.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                FB
              </a>
              <a href="#" className="social-icon">
                IG
              </a>
              <a href="#" className="social-icon">
                YT
              </a>
              <a href="#" className="social-icon">
                TT
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Khám Phá</h4>
            <ul>
              <li>
                <a href="#home">Trang chủ</a>
              </li>
              <li>
                <a href="#rooms">Phòng nghỉ</a>
              </li>
              <li>
                <a href="#contact">Liên hệ</a>
              </li>
              <li>
                <a href="#">Dịch vụ spa</a>
              </li>
              <li>
                <a href="#">Nhà hàng</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Hỗ Trợ</h4>
            <ul>
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#">Hướng dẫn đặt phòng</a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Bản Tin</h4>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Đăng ký để nhận những ưu đãi đặc biệt sớm nhất từ chúng tôi.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email của bạn" className="newsletter-input" />
              <button className="btn-subscribe">ĐĂNG KÝ NGAY</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Luna Moon Hotel. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Nha Trang, Vietnam</span>
            <span>+84 123 456 789</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
