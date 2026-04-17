import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import RoomDetail from './components/RoomDetail'
import { ROOMS_DATA } from '../data/roomsData'

function App() {
  const [selectedRoomId, setSelectedRoomId] = useState(null)

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId)

  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <main>
        {selectedRoomId ? (
          <RoomDetail room={selectedRoom} onBack={() => setSelectedRoomId(null)} />
        ) : (
          <>
            <Hero />
            <Rooms onSelectRoom={setSelectedRoomId} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
