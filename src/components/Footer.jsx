import React from 'react'

export default function Footer() {
  const styles = {
    backgroundColor: 'var(--primary)',
    color: 'var(--white)',
    padding: '3rem 0',
    textAlign: 'center',
    marginTop: 'auto',
  }

  return (
    <footer style={styles}>
      <div className="container">
        <img
          src="/logo.png"
          alt="Luna Moon Hotel Logo"
          style={{
            height: '60px',
            opacity: 0.8,
            filter: 'brightness(0) invert(1)',
            marginBottom: '1rem',
          }}
        />
        <h2>Luna Moon Hotel</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>Nha Trang, Vietnam</p>
        <p>© 2026 Luna Moon Hotel. All rights reserved.</p>
      </div>
    </footer>
  )
}
