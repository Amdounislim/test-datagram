import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
  return (
    <section id="sidebar">
    <Link to="#" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">AdminHub</span>
    </Link>
    <ul className="side-menu top">
        <li className="active">
            <Link to="/">
                <i className='bx bxs-dashboard' ></i>
                <span className="text">Home</span>
            </Link>
        </li>
        <li>
            <Link to="/users">
            <i className='bx bxs-group' ></i>
                <span className="text">Users</span>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Carts</span>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className='bx bxs-message-dots' ></i>
                <span className="text">Products</span>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className='bx bxs-group' ></i>
                <span className="text">Categories</span>
            </Link>
        </li>
    </ul>
    <ul className="side-menu">
        <li>
            <Link to="#" className="logout">
                <i className='bx bxs-log-out-circle' ></i>
                <span className="text">Logout</span>
            </Link>
        </li>
    </ul>
 
</section>
  )
}

export default Sidebar