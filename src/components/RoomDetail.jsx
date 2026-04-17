import React from 'react'
import './RoomDetail.css'

export default function RoomDetail({ room, onBack }) {
    if (!room) return null

    return (
        <div className="room-detail-overlay">
            <div className="detail-header">
                <button className="btn-back" onClick={onBack} title="Quay lại">
                    ←
                </button>
                <img src={room.img} alt={room.name} className="detail-hero-img" />
            </div>

            <div className="container detail-content">
                <div className="detail-grid">
                    <div className="detail-info">
                        <h1>{room.name}</h1>
                        <span className="detail-price-tag">{room.price} VND / Đêm</span>

                        <p className="detail-description">
                            {room.desc} Trải nghiệm không gian nghỉ dưỡng đẳng cấp tại Luna Moon Hotel với đầy
                            đủ các trang thiết bị hiện đại nhất. Phòng được thiết kế theo phong cách hiện
                            đại, tận dụng tối đa ánh sáng tự nhiên và gió trời, mang lại cảm giác thư thái
                            tuyệt đối cho quý khách.
                        </p>

                        <h3>Tiện nghi phòng</h3>
                        <ul className="features-list">
                            <li className="feature-item">
                                <span className="feature-icon">📶</span> Wi-Fi Tốc độ cao
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">❄️</span> Điều hòa nhiệt độ
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">📺</span> TV Truyền hình cáp
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">🚿</span> Phòng tắm riêng biệt
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">☕</span> Máy pha cà phê
                            </li>
                            <li className="feature-item">
                                <span className="feature-icon">🛡️</span> Két sắt an toàn
                            </li>
                        </ul>
                    </div>

                    <div className="booking-side">
                        <div className="booking-card">
                            <h3>Đặt phòng này</h3>
                            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label>Ngày nhận phòng</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Ngày trả phòng</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Số lượng khách</label>
                                    <select className="form-control">
                                        <option>1 Người lớn</option>
                                        <option>2 Người lớn</option>
                                        <option>Gia đình (2 NL, 1 TE)</option>
                                    </select>
                                </div>
                                <button className="btn-book-full">Xác nhận đặt phòng</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
