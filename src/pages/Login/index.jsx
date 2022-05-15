import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../../services/storeApi'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home', { replace: true })
    }
    setLoading(false)
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // await login(form.username, form.password)
      await login()
      navigate('/home', { replace: true })
    } catch (error) {
      alert('Invalid credentials')
    }
  }

  const handleChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }))
  }
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <section>
      <div>
        <h1>Welcome to Store Admin</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          onChange={handleChange}
          required
          name='username'
          type='text'
          placeholder='Username...'
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          required
          type='password'
          name='password'
          placeholder='**********'
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Login
