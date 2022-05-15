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
          <Route path='dashboard' element={<PrivateRoute component={Home} />} />
          <Route path='users' element={<PrivateRoute component={Users} />} />
          <Route
            path='carts'
            element={
              <PrivateRoute
                component={() => <h1 style={{ textAlign: 'center' }}>Carts</h1>}
              />
            }
          />
          <Route
            path='products'
            element={
              <PrivateRoute
                component={() => (
                  <h1 style={{ textAlign: 'center' }}> Products</h1>
                )}
              />
            }
          />
          <Route
            path='categories'
            element={
              <PrivateRoute
                component={() => (
                  <h1 style={{ textAlign: 'center' }}>categories</h1>
                )}
              />
            }
          />
          <Route index element={<Navigate to='/dashboard' />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter