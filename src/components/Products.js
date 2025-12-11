import React from 'react'
import productImg from '../images/Group 836.png'

const Products = () => {
    const productData = [
    {
      id: 1,
      name: "PLUMP & FILL",
      desc: "Plumping & Lip liner",
      price: "£18.00",
      img: productImg,
      colors: ["light", "pink", "red"],
    },
    {
      id: 2,
      name: "PLUMP & FILL",
      desc: "Plumping & Lip liner",
      price: "£18.00",
      img: productImg,
      colors: ["light", "pink", "red"],
    },
    {
      id: 3,
      name: "PLUMP & FILL",
      desc: "Plumping & Lip liner",
      price: "£18.00",
      img: productImg,
      colors: ["light", "pink", "red"],
    },
    {
      id: 4,
      name: "PLUMP & FILL",
      desc: "Plumping & Lip liner",
      price: "£18.00",
      img: productImg,
      colors: ["light", "pink", "red"],
    },
  ];
  return (

    <div className="sample-products">
      <h1>BEST IN PLUMP</h1>

      <div className="products-container">
        {productData.map((item) => (
          <div className="product-card cards" key={item.id} >
            <div className="product-image-wrapper">
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

export default Products