import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import Sidebar from '../components/Sidebar'
import Home from './Home'
import Users from './Users'
import NotFound from './NotFound'
import Categories from './Categories'
import Products from './Products.js'

import UserDetails from './UserDetails'
import CartDetails from './CartDetails'
import Carts from './Cart'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <>
              <PrivateRoute component={Sidebar} />
              <Outlet />
            </>
          }
        >
          <Route path='home' element={<PrivateRoute component={Home} />} />
          <Route path='users' element={<PrivateRoute component={Users} />} />
          <Route path='users/:id' element={<UserDetails />} />
          <Route path='carts' element={<PrivateRoute component={Carts} />} />
          <Route path='carts/:id' element={<CartDetails />} />

          <Route
            path='products'
            element={<PrivateRoute component={Products} />}
          />
          <Route
            path='categories'
            element={<PrivateRoute component={Categories} />}
          />
          <Route index element={<Navigate to='/home' />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
