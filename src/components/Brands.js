import React from 'react'

import fabImg from '../images/fab-mag.png'
import closerImg from '../images/Closer_logo.png'
import refImg from '../images/refinery-29.png'
import mailImg from '../images/mailonline-vector-logo.png'
import thisImg from '../images/This_Morning_TV_Logo.png'
import cosmoImg from '../images/cosmo.png'

const Brands = () => {
  return (
    <div className="featured-section">
      <div className="featured-inner">
        <p className="featured-title">FEATURED IN</p>
        <div className="featured-logos">
          <img src={fabImg} alt="fabimg" />
          <img src={closerImg} alt="Closer" />
          <img src={refImg} alt="Refinery29" />
          <img src={mailImg} alt="Mail Online" />
          <img src={thisImg} alt="This Morning" />
          <img src={cosmoImg} alt="Cosmopolitan" />
        </div>
      </div>
    </div>
  )
}

export default Brands