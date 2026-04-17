# Luna Moon Hotel Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a stunning, bright-toned static React website for Luna Moon Hotel featuring a home section, room showcases, and contact information.

**Architecture:** A single-page React application generated with Vite. The UI will be constructed using modular functional components (Header, Hero, Rooms, Contact, Footer) and styled beautifully using Vanilla CSS with CSS variables for theming to reflect a premium, bright aesthetic. 

**Tech Stack:** React, Vite, Vanilla CSS

---

### Task 1: Setup React Project and Configuration

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`
- Modify: `public/logo.png`

- [ ] **Step 1: Initialize the Vite React project**

Run: `npm create vite@latest . -- --template react --force` 
Expected: Scaffolds the React project in the current directory (overwriting ignoring existing `logo.png`).

- [ ] **Step 2: Install dependencies**

Run: `npm install`
Expected: Installs react, react-dom, etc.

- [ ] **Step 3: Move the logo to public directory**

Run: `mv logo.png public/logo.png`
Expected: Logo is now accessible at `/logo.png`.

- [ ] **Step 4: Update document info & fonts**

Update `index.html` to have the correct title and font imports (Outfit form Google Fonts).

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Luna Moon Hotel | Nha Trang</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Successfully builds.

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "chore: initialize vite react project for luna moon hotel"
```

### Task 2: Global Styles & Design System

**Files:**
- Modify: `src/index.css`
- Delete: `src/App.css`, `src/assets/react.svg`

- [ ] **Step 1: Delete default assets**

Run: `rm src/App.css src/assets/react.svg`

- [ ] **Step 2: Define global styles and CSS variables in `src/index.css`**

```css
:root {
  --primary: #0F172A; /* Deep blue for text from logo */
  --secondary: #D4AF37; /* Gold/Yellow for accents from moon */
  --bg-light: #F8FAFC;
  --white: #FFFFFF;
  --text-main: #334155;
  --text-muted: #64748B;
  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  --radius: 12px;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--bg-light);
  color: var(--text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--primary);
  font-weight: 600;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--secondary);
  border-radius: 2px;
}

section {
  padding: 5rem 0;
}
```

- [ ] **Step 3: Update `src/main.jsx` to ensure clean imports**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 4: Commit**

```bash
git add src/index.css src/main.jsx
git commit -a -m "style: setup global design system and css variables"
```

### Task 3: Layout and Header (Menu) Component

**Files:**
- Create: `src/components/Header.jsx`, `src/components/Header.css`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/Header.css`**

```css
.header {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: var(--shadow-sm);
  padding: 1rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-img {
  height: 50px;
  width: 50px;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  font-weight: 500;
  color: var(--text-main);
  font-size: 1.1rem;
}

.nav-link:hover {
  color: var(--secondary);
}

.btn-book {
  background-color: var(--secondary);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  transition: var(--transition);
}

.btn-book:hover {
  background-color: #b5952f;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

- [ ] **Step 2: Create `src/components/Header.jsx`**

```jsx
import React from 'react';
import './Header.css';

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
            <li><a href="#home" className="nav-link">Trang chủ</a></li>
            <li><a href="#rooms" className="nav-link">Phòng nghỉ</a></li>
            <li><a href="#contact" className="nav-link">Liên hệ</a></li>
          </ul>
        </nav>
        <button className="btn-book">Đặt phòng ngay</button>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create simple Footer `src/components/Footer.jsx`**

```jsx
import React from 'react';

export default function Footer() {
  const styles = {
    backgroundColor: 'var(--primary)',
    color: 'var(--white)',
    padding: '3rem 0',
    textAlign: 'center',
    marginTop: 'auto'
  };
  
  return (
    <footer style={styles}>
      <div className="container">
        <img src="/logo.png" alt="Luna Moon Hotel Logo" style={{height: '60px', opacity: 0.8, filter: 'brightness(0) invert(1)', marginBottom: '1rem'}} />
        <h2>Luna Moon Hotel</h2>
        <p style={{color: 'var(--text-muted)', margin: '1rem 0'}}>Nha Trang, Vietnam</p>
        <p>© 2026 Luna Moon Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Update `src/App.jsx` structure**

```jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <main>
        {/* Sections will go here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 5: Commit**

```bash
git add src/components src/App.jsx
git commit -m "feat: add beautiful header navigation and footer"
```

### Task 4: Home/Hero Section

**Files:**
- Create: `src/components/Hero.jsx`, `src/components/Hero.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/Hero.css`**

```css
.hero {
  height: calc(100vh - 80px);
  min-height: 600px;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4)), url('https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: var(--white);
}

.hero-content {
  max-width: 600px;
  animation: fadeIn 1s ease-out forwards;
}

.hero-subtitle {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--secondary);
  font-weight: 600;
  margin-bottom: 1rem;
  display: block;
}

.hero-title {
  font-size: 4rem;
  color: var(--white);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-primary {
  display: inline-block;
  background-color: var(--secondary);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: #b5952f;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

- [ ] **Step 2: Create `src/components/Hero.jsx`**

```jsx
import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" style={{padding: 0}}>
      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">Chào mừng đến với</span>
          <h1 className="hero-title">Trải nghiệm nghỉ dưỡng hoàn hảo</h1>
          <p className="hero-description">
            Khám phá vẻ đẹp sang trọng và không gian ấm cúng tại Luna Moon Hotel. 
            Nơi mọi chi tiết đều được chăm chút để mang lại kỳ nghỉ tuyệt vời nhất cho bạn.
          </p>
          <a href="#rooms" className="btn-primary">Khám phá ngay</a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add Hero to `src/App.jsx`**

```jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.* src/App.jsx
git commit -m "feat: design hero section with background and animations"
```

### Task 5: Rooms/Products Section

**Files:**
- Create: `src/components/Rooms.jsx`, `src/components/Rooms.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/Rooms.css`**

```css
.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.room-card {
  background-color: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.room-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-md);
}

.room-img-wrapper {
  overflow: hidden;
  height: 250px;
}

.room-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.room-card:hover .room-img {
  transform: scale(1.05);
}

.room-details {
  padding: 1.5rem;
}

.room-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.room-desc {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.room-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--secondary);
}

.room-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #E2E8F0;
  padding-top: 1rem;
}

.btn-outline {
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  transition: var(--transition);
}

.btn-outline:hover {
  background-color: var(--primary);
  color: var(--white);
}
```

- [ ] **Step 2: Create `src/components/Rooms.jsx`**

```jsx
import React from 'react';
import './Rooms.css';

const ROOMS_DATA = [
  {
    id: 1,
    name: "Phòng Superior",
    desc: "Không gian thoáng đãng tĩnh lặng với đầy đủ tiện nghi tiêu chuẩn.",
    price: "1,200,000",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Phòng Deluxe Hướng Biển",
    desc: "Thưởng ngoạn cảnh biển tuyệt đẹp trực tiếp từ ban công phòng bạn.",
    price: "1,800,000",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Suite Mặt Trăng (Luna Suite)",
    desc: "Đẳng cấp và sang trọng bậc nhất với khu vực phòng khách riêng biệt.",
    price: "3,500,000",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec4d70ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Rooms() {
  return (
    <section id="rooms" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="container">
        <h2 className="section-title">Hạng Phòng Nghỉ</h2>
        <div className="rooms-grid">
          {ROOMS_DATA.map(room => (
            <div className="room-card" key={room.id}>
              <div className="room-img-wrapper">
                <img src={room.img} alt={room.name} className="room-img" />
              </div>
              <div className="room-details">
                <h3 className="room-title">{room.name}</h3>
                <p className="room-desc">{room.desc}</p>
                <div className="room-footer">
                  <span className="room-price">{room.price} VND/Đêm</span>
                  <button className="btn-outline">Chi tiết</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update `src/App.jsx` to include Rooms**

```jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <main>
        <Hero />
        <Rooms />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Rooms.* src/App.jsx
git commit -m "feat: implement rooms product showcase section"
```

### Task 6: Contact Section

**Files:**
- Create: `src/components/Contact.jsx`, `src/components/Contact.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/Contact.css`**

```css
.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  background-color: var(--white);
  border-radius: var(--radius);
  padding: 3rem;
  box-shadow: var(--shadow-sm);
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-icon {
  width: 40px;
  height: 40px;
  background-color: #FEF08A;
  color: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.contact-form {
  flex: 1.5;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-control {
  padding: 1rem;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
}

.form-control:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  background-color: var(--primary);
  color: var(--white);
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: var(--transition);
}

.btn-submit:hover {
  background-color: #1E293B;
}
```

- [ ] **Step 2: Create `src/components/Contact.jsx`**

```jsx
import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Liên Hệ Với Chúng Tôi</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Thông Tin Liên Hệ</h3>
            <p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>
              Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào.
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
              <textarea className="form-control" placeholder="Bạn cần chúng tôi giúp gì?" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Gửi Tin Nhắn</button>
          </form>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to `src/App.jsx`**

```jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.* src/App.jsx
git commit -m "feat: add beautiful contact form and information section"
```
