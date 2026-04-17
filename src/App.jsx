import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
  )
}

export default App
