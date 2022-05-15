import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CartCard from '../../components/CartCard'
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
            return <CartCard key={cart.id} cart={cart} />
          })}
        </ul>
      </main>
    </section>
  )
}

export default UserDetails
