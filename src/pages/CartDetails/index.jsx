import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { queryCarts, queryProducts } from '../../services/storeApi'
import { calculateTotalPrice } from '../../utils/cart'

// import './style.css'

const CartDetails = () => {
  const { id } = useParams()

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAndCartDetails(id)
  }, [])

  const getAndCartDetails = async (id) => {
    const cart = await queryCarts({ id })
    console.log('p', cart.products)

    for (let i = 0; i < cart.products.length; i++) {
      const relatedProduct = await queryProducts({
        id: cart.products[i].productId,
      })
      setProducts([...products, relatedProduct])
    }
    setCart(cart)
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <section id='content'>
      <main>
        <ul className='box-info'>
          <li>
            <i className='bx bxs-cart'></i>
            <span className='text'>
              <h3>Total Price</h3>
              <h3>{calculateTotalPrice(products)}</h3>
            </span>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default CartDetails
