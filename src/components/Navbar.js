import React from 'react'

import mainlogo from '../images/Mask Group 26.png'


const Navbar = () => {

  return (

    <div className="first-page">
      <div className="shipping-bar">FREE UK SHIPPING ON ORDERS OVER £40</div>
      <div className="navbar">
        <div className="nav-left">
          <button className="nav-pill">Shop</button>
          <button className="nav-pill">About</button>
          <button className="nav-pill">Learn</button>
        </div>

        <div className="logo">PROJECT</div>
        <div className="nav-right">
          <button className="nav-pill">Search</button>
          <button className="nav-pill cart-pill">
            Cart
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>


      <div className="hero-content">
        <div className="hero-title">
          <h1>
            BIG LIPS,<br />
            BIGGER ENERGY
          </h1>
          <p className="hero-sub">
            Our famous lip liner lines, fills and plumps so you can cheat your
            way to an instant lip lift.
          </p>
        </div>
        <a className="hero-link" href="#">SHOP PLUM & FIL</a>
      </div>
    </div>

  )
}

export default Navbar