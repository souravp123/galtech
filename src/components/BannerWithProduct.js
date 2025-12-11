import React from 'react'

const BannerWithProduct = () => {
  return (

    <div className="container pb-5">
      <div className="left-box">
        <div className="text-overlay">
          <h2>TRENDING ON TIKTOK</h2>
          <h1>YOUR LIPS<br />BUT JUICIER</h1>
        </div>
      </div>

      <div className="right-box">
        <div className="arrow-icon">
          <span className="far fa-arrow-alt-circle-right"></span>
        </div>
        <div className="image-area"></div>
        <div className="desc-area">
          <h2>PLUMP JUICE</h2>
          <p className="sub">Coconut • Clear</p>
          <p className="price">£18.00</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
    
  )
}

export default BannerWithProduct