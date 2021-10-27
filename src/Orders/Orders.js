import './orders.css'
import {db} from '../firebase'
import {useState, useEffect} from 'react'
import {useStateValue} from '../StateProvider'
import Order from './Order'

function Orders() {
  const [{basket, user}, dispatch] = useStateValue()
  const [order, setOrders] = useState([]);

  useEffect(() => {
    if(user){
    db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
         setOrders(snapshot.docs.map(doc => ({
           id: doc.id,
           data: doc.data()
         })))
      })
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {order?.map((order, i) => (
          <Order order={order} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default Orders
