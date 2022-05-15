import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { queryCarts } from '../../services/storeApi'
import Spinner from '../../components/Spinner'
import './style.css'
import CartCard from '../../components/CartCard'

const Carts = () => {
  const [carts, setCarts] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getCarts = async () => {
    const carts = await queryCarts()
    setCarts(carts)
    console.log(carts)
    setLoading(false)
  }

  useEffect(() => {
    getCarts()
  }, [navigate])

  if (loading) {
    return <Spinner />
  }

  return (
    <section id='content'>
      <main>
        <h1>Carts</h1>

        <ul className='carts'>
          {carts.map((cart) => (
            <CartCard key={cart.id} cart={cart} />
          ))}
        </ul>
      </main>
    </section>
  )
}

export default Carts
