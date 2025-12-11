import React from 'react'

import imgOne from '../images/Placement Area-3.png'
import imgTwo from '../images/Placement Area-4.png'
import imgThree from '../images/Placement Area 3.png'
import imgFour from '../images/Placement Area 4.png'
import imgFive from '../images/Placement Area 5.png'
import imgSix from '../images/Placement Area-5.png'


const SocialVideo = () => {

  return (

    <div className="social-section">
      <div className="social-header">
        <h2>@PROJECT_COSMETICS</h2>
        <a href="#" className="follow-btn">FOLLOW US</a>
      </div>

      <div className="social-gallery">
        <div className="social-card">
          <img src={imgOne} alt="Post 1" />
        </div>
        <div className="social-card">
          <img src={imgTwo} alt="Post 2" />
        </div>
        <div className="social-card">
          <img src={imgThree} alt="Post 3" />
        </div>
        <div className="social-card">
          <img src={imgFour} alt="Post 4" />
        </div>
        <div className="social-card">
          <img src={imgFive} alt="Post 5" />
        </div>
        <div className="social-card">
          <img src={imgSix} alt="Post 6" />
        </div>
      </div>
    </div>
  )
}

export default SocialVideo