import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Login from './Login/index.jsx'

const PublicRoute = () => {
  return (
      <Route path='/login' element={<Login />} />
  )
}

export default PublicRoute
