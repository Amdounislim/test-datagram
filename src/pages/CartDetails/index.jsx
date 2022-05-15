import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import Spinner from '../../components/Spinner'
import { queryCarts, queryProducts } from '../../services/storeApi'

// import './style.css'

const CartDetails = () => {
  const { id } = useParams()

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCartsAndRelatedProducts(id)
  }, [])



  const getCartsAndRelatedProducts = async (id) => {
    const cart = await queryCarts({ id })
    const products = []
    let totalPrice = 0

    for (let i = 0; i < cart.products.length; i++) {
      const relatedProduct = await queryProducts({
        id: cart.products[i].productId,
      })
      totalPrice += relatedProduct.price
      products.push(relatedProduct)
    }

    setTotalPrice(totalPrice)
    setProducts(products)
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
              <h3>{totalPrice}$</h3>
            </span>
          </li>
        </ul>

        <div>
          {products.map((product) => {
            console.log(product.title)
            return (
              <ProductCard key={product.title} withDetails prod={product} />
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default CartDetails
