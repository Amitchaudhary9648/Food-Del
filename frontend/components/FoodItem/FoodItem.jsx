import React from 'react'
import './FoodItem.css'

const FoodItem = ({id, name, price, description, image}) => {
  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img src={image} alt="" className="food-item-image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating"></div>
      </div>
    </div>
  )
}

export default FoodItem
