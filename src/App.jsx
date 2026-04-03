import { useState, useEffect } from 'react'
import splashBg from './assets/splash-bg.png'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('splash')

  return (
    <div className="app">
      {currentPage === 'splash' && <SplashScreen onEnter={() => setCurrentPage('home')} />}
      {currentPage === 'home' && <HomePage />}
    </div>
  )
}

function SplashScreen({ onEnter }) {
  useEffect(() => {
    const timer = setTimeout(onEnter, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="splash" onClick={onEnter}>
      <img src={splashBg} alt="TripBliss" className="splash-bg" />
    </div>
  )
}

function HomePage() {
  const trips = [
    { id: 1, title: "Bali, Indonesia", dates: "Mar 2025", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400" },
    { id: 2, title: "Paris, France", dates: "Jun 2025", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
    { id: 3, title: "Amalfi Coast, Italy", dates: "Aug 2025", img: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=400" },
    { id: 4, title: "Kyoto, Japan", dates: "Oct 2025", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400" },
    { id: 5, title: "Santorini, Greece", dates: "Dec 2025", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400" },
    { id: 6, title: "New York, USA", dates: "Jan 2026", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400" },
  ]

  return (
    <div className="page">
      <header className="header">
        <h2 className="logo-text small">tripbliss</h2>
        <p className="welcome">Welcome back! ✈️</p>
      </header>

      <div className="section">
        <h3 className="section-title">My Trips</h3>
        <div className="trip-grid">
          {trips.map(trip => (
            <div className="trip-card" key={trip.id}>
              <img src={trip.img} alt={trip.title} className="card-img" />
              <div className="card-info">
                <h4>{trip.title}</h4>
                <p>{trip.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App