import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { queryUsers, deleteUser } from '../../services/storeApi'
import UserCard from '../../components/UserCard'
import Spinner from '../../components/Spinner'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getUsers = async () => {
    const users = await queryUsers()
    setUsers(users)
    setLoading(false)
  }

  const removeUserById = async (id) => {
    const confirmlDelete = window.confirm('Are you sure you want to delete')
    if (!confirmlDelete) return
    try {
      await deleteUser(id)
      setUsers(users.filter((user) => user.id !== id))
      alert('User Deleted with success')
    } catch (error) {
      alert('User Delete failed')
    }
  }

  useEffect(() => {
    getUsers()
  }, [navigate])

  return (
    <section id='content'>
      <main>
        <h1>Users</h1>
        {loading ? (
          <Spinner />
        ) : (
          <ul className='box-info'>
            {users.map((user) => (
              <UserCard
                user={user}
                key={user.id}
                removeUserById={removeUserById}
              />
            ))}
          </ul>
        )}
      </main>
    </section>
  )
}

export default Users
