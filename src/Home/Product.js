import React from 'react'
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded"
import './Product.css'
import { useStateValue } from '../StateProvider'

function Product({id, title, image, price, rating}) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
   // dispatch the item into the data Layout
    dispatch({
      type: 'ADD_TO_BASKET', 
      item: {
        id:id,
        title: title,
        image: image, 
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, index) => (
            <p key={index}><StarRateRoundedIcon id="product__rating__star" /></p>
          ))}
          
        </div>
      </div>
      <img
        src={image}
        alt="product"
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
