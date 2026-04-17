import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Liên Hệ Với Chúng Tôi</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Thông Tin Liên Hệ</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu
              hỏi nào.
            </p>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <strong>Địa chỉ</strong>
                <p>Nha Trang, Vietnam</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <strong>Điện thoại</strong>
                <p>+84 123 456 789</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <strong>Email</strong>
                <p>contact@lunamoonhotel.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Họ và tên của bạn" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Địa chỉ Email" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Bạn cần chúng tôi giúp gì?" required />
            </div>
            <button type="submit" className="btn-submit">
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
