import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import UserCard from '../../components/UserCard'
import { queryCarts, queryUsers } from '../../services/storeApi'

import './style.css'

const UserDetails = () => {
  const { id } = useParams()

  const [user, setUser] = useState({})
  const [carts, setCarts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserAndCartDetails(id)
  }, [])

  const getUserAndCartDetails = async (id) => {
    const user = await queryUsers({ id })
    const carts = await queryCarts({ id: `user/${id}` })

    setUser(user)
    setCarts(carts)
    console.log(user)
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <section id='content'>
      <main>
        <ul className='box-info'>
          <UserCard user={user} withDetails={true} />
          <li>
            <i className='bx bxs-cart'></i>
            <span className='text'>
              <h3>Carts</h3>
              <h3>{carts.length}</h3>
            </span>
          </li>
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          {carts.map((cart) => {
            return (
              <li key={cart.id} className='cart-card'>
                <h3>Total Products : {cart.products.length}</h3>

                <p>
                  <Link to={`/carts/${cart.id}`}>Show more details ... </Link>
                </p>

                <span>
                  Date : {cart.date.match(/(\d{2})-(\d{2})-(\d{2})/gi)[0]}
                </span>
              </li>
            )
          })}
        </ul>
      </main>
    </section>
  )
}

export default UserDetails
