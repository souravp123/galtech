import React from 'react'

import image from '../images/Placement Area 2.png'


const PlumpHero = () => {
    
  return (
    <div className="plump-hero">
      <div className="plump-hero-inner">
        <div className="plump-image-wrapper">
          <img src={image} alt="Plump lips" />
        </div>

        <div className="plump-strip">
          <span>YOU ARE YOUR BEST PROJECT</span>
          <span>YOU ARE YOUR BEST PROJECT</span>
          <span>YOU ARE YOUR BEST PROJECT</span>
        </div>

        <div className="plump-content">
          <h1>MADE TO PLUMP,<br />MADE FOR EVERYONE</h1>
          <p>
            We’re here to empower you to celebrate your natural beauty and have
            fun while doing it. That’s why we’ve created derm-approved, clean
            and conscious plumpers that you can actually feel good about
            obsessing over.
          </p>
          <button className="plump-btn">DISCOVER MORE</button>
        </div>
      </div>
    </div>
  )
}

export default PlumpHero