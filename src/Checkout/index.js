import React from 'react'
import './index.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from '../StateProvider'

function Checkout() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="checkout">

      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
          alt="ad"
        />
        <div>
          <h2 className="checkout_title">
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>

    </div>
  )
}

export default Checkout
