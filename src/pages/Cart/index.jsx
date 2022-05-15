import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { queryCarts } from '../../services/storeApi'
import Spinner from '../../components/Spinner'
import './style.css'

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
            <li>
              <h3>Total Products : {cart.products.length}</h3>
              <h4>
                <span className='text'>
                <i className='bx bxs-time'></i>
                  <h3>Date</h3>
                  <h3>{cart.date.match(/(\d{2})-(\d{2})-(\d{2})/gi)[0]}</h3>
                </span>
              </h4>
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}

export default Carts
