import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const CartCard = ({ cart }) => {
  return (
    <li key={cart.id} className='cart-card'>
      <span>Cart ID : {cart.id}</span>
      <h3>Total Products : {cart.products.length}</h3>

      <p>
        <Link to={`/carts/${cart.id}`}>Show more details ... </Link>
      </p>

      <span>Date : {cart.date.match(/(\d{2})-(\d{2})-(\d{2})/gi)[0]}</span>
    </li>
  )
}

export default CartCard
