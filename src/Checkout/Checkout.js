import './checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from '../StateProvider'

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Shopping Cart</h3>
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>

    </div>
  )
}

export default Checkout
