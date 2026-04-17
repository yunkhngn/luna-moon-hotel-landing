import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Lien He Voi Chung Toi</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Thong Tin Lien He</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Chung toi luon san sang ho tro ban. Hay lien he voi chung toi neu ban co bat ky cau
              hoi nao.
            </p>

            <div className="info-item">
              <div className="info-icon">D</div>
              <div>
                <strong>Dia chi</strong>
                <p>Nha Trang, Vietnam</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">P</div>
              <div>
                <strong>Dien thoai</strong>
                <p>+84 123 456 789</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">E</div>
              <div>
                <strong>Email</strong>
                <p>contact@lunamoonhotel.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Ho va ten cua ban" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Dia chi Email" required />
            </div>
            <div className="form-group">
              <input type="tel" className="form-control" placeholder="So dien thoai" />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Ban can chung toi giup gi?" required />
            </div>
            <button type="submit" className="btn-submit">
              Gui Tin Nhan
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
