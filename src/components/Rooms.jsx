import React from 'react'
import './Rooms.css'
import { ROOMS_DATA } from '../../data/roomsData'

export default function Rooms({ onSelectRoom }) {
  return (
    <section id="rooms" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="container">
        <h2 className="section-title">Hạng Phòng Nghỉ</h2>
        <div className="rooms-grid">
          {ROOMS_DATA.map((room) => (
            <div className="room-card" key={room.id}>
              <div className="room-img-wrapper">
                <img src={room.img} alt={room.name} className="room-img" />
              </div>
              <div className="room-details">
                <h3 className="room-title">{room.name}</h3>
                <p className="room-desc">{room.desc}</p>
                <div className="room-footer">
                  <span className="room-price">{room.price} VND/Đêm</span>
                  <button className="btn-outline" onClick={() => onSelectRoom(room.id)}>
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
