import React from 'react'
import './Rooms.css'

const ROOMS_DATA = [
  {
    id: 1,
    name: 'Phong Superior',
    desc: 'Khong gian thoang dang tinh lang voi day du tien nghi tieu chuan.',
    price: '1,200,000',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Phong Deluxe Huong Bien',
    desc: 'Thuong ngoan canh bien tuyet dep truc tiep tu ban cong phong ban.',
    price: '1,800,000',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Suite Mat Trang (Luna Suite)',
    desc: 'Dang cap va sang trong bac nhat voi khu vuc phong khach rieng biet.',
    price: '3,500,000',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec4d70ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export default function Rooms() {
  return (
    <section id="rooms" style={{ backgroundColor: '#F1F5F9' }}>
      <div className="container">
        <h2 className="section-title">Hang Phong Nghi</h2>
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
                  <span className="room-price">{room.price} VND/Dem</span>
                  <button className="btn-outline">Chi tiet</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
