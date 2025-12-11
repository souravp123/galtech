import React from 'react'
import lipImage from '../images/Placement Area.png'
import faceImage from '../images/Placement Area-1.png'
import kitImage from '../images/Placement Area-2.png'

const Cards = () => {

    const cardData = [
    {
      id: 1,
      title: "SHOP",
      label: "LIP",
      img: lipImage,
    },
    {
      id: 2,
      title: "SHOP",
      label: "FACE",
      img: faceImage,
    },
    {
      id: 3,
      title: "SHOP",
      label: "KITS",
      img: kitImage,
    },
  ];



  return (

    <div className="cards-content pb-3">
      {cardData.map((item) => (
        <div className="card-wrapper" key={item.id}>
          <div className="card img-fluid">
            <img className="card-img-top" src={item.img} alt={item.label} />

            <div className="card-img-overlay">
              <h6 className="card-title top-overlay">
                {item.title} <br />
                <span>{item.label}</span>
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards