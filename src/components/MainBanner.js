import React from 'react'
import Navbar from './Navbar'
import mainBg from '../images/Mask Group 26.png'

const MainBanner = () => {
  return (
    <div className="page-wrapper">
      {/* Top shipping bar */}
      <div className="shipping-bar">
        FREE UK SHIPPING ON ORDERS OVER £40
      </div>

      {/* Main content with border */}
      <div className="page-inner">
        {/* Navbar */}
        <header className="navbar">
          <div className="nav-left">
            <button className="pill-btn">SHOP</button>
            <button className="pill-btn">ABOUT</button>
            <button className="pill-btn">LEARN</button>
          </div>

          <div className="nav-logo">PROJECT</div>

          <div className="nav-right">
            <button className="pill-btn">SEARCH</button>
            <button className="pill-btn cart-btn">
              CART
              <span className="cart-count">0</span>
            </button>
          </div>
        </header>

        {/* Hero section */}
        <section className="hero">
          <div className="hero-text">
            <h1>
              BIG LIPS,
              <br />
              BIGGER ENERGY
            </h1>
            <p>
              Our famous lip liner lines, fills and plumps so you can cheat
              your way to an instant lip lift.
            </p>
            <button className="cta-btn">SHOP PLUMP &amp; FILL</button>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={mainBg}
              alt="Big lips model"
              className="hero-image"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default MainBanner