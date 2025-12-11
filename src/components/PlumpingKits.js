import React from 'react'

import imgOne from '../images/Group 833.png'
import imgTwo from '../images/Group 835.png'
import imgThree from '../images/Group 836.png'
import imgFour from '../images/Group 837.png'
import imgFive from '../images/Group 838.png'

const PlumpingKits = () => {
    const kitsData = [
        {
          id: 1,
          name: "PLUMP & FILL",
          desc: "Plumping & Lip liner",
          price: "£18.00",
          off: "19",
          img: imgOne,
          colors: ["light", "pink", "red"],
        },
        {
          id: 2,
          name: "PLUMP & FILL",
          desc: "Plumping & Lip liner",
          price: "£18.00",
          off: "20",
          img: imgTwo,
          colors: ["light", "pink", "red"],
        },
        {
          id: 3,
          name: "PLUMP & FILL",
          desc: "Plumping & Lip liner",
          price: "£18.00",
          off: "22",
          img: imgThree,
          colors: ["light", "pink", "red"],
        },
        {
          id: 4,
          name: "PLUMP & FILL",
          desc: "Plumping & Lip liner",
          price: "£18.00",
          off: "20",
          img: imgFour,
          colors: ["light", "pink", "red"],
        },
        
      ];

  return (
    <div className="sample-products">
      <div className='sample-product-headline'>
        <h1>BEST IN PLUMP</h1>
        <a  
        href="#" 
        className="kits-btn">
        SHOP ALL KITS
        </a>
      </div>
      <div className="products-container">
        {kitsData.map((item) => (
          <div className="product-card cards" key={item.id}>
            <div className="product-image-wrapper">
              <div class="text-over">{item.off}% OFF</div>
              <img src={item.img} alt={item.name} className="product-image" />
            </div>

            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-desc">{item.desc}</p>
              <p className="product-price">{item.price}</p>

              <div className="product-colors">
                {item.colors.map((color, index) => (
                  <span key={index} className={`color-dot color-${color}`}></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlumpingKits