import React, { useState, useEffect } from "react";
import {
  queryUsers,
  queryProducts,
  queryCarts,
  queryCategories,
} from "../../services/storeApi";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import './style.css'

const Home = () => {
  const [users, setUsers] = useState(0);
  const [categories, setCategories] = useState(0);
  const [products, setProducts] = useState(0);
  const [carts, setCarts] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getUsers = async () => {
    const users = await queryUsers();
    setUsers(users.length);
  };
  const getProducts = async () => {
    const products = await queryProducts();
    setProducts(products.length);
  };
  const getCarts = async () => {
    const carts = await queryCarts();
    setCarts(carts.length);
  };
  const getCategories = async () => {
    const categories = await queryCategories();
    setCategories(categories.length);
  };

  useEffect(() => {
    getUsers();
    getProducts();
    getCarts();
    getCategories();
    setLoading(false);
  }, [navigate]);

  return (
    <section id='content'>
    <main>
    <h1 style={{ textAlign: "center" }}> Home</h1>
      {loading ? (
        <Spinner />
      ) : (
        <ul className='info-box'>
          <Link to="/users">
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>{users}</h3>
						<h3>Users</h3>
					</span>
				</li>
        </Link>
        <Link to="/products">
          	<li>
					<i class='bx bxl-product-hunt' ></i>
					<span class="text">
						<h3>{products}</h3>
						<h3>Products</h3>
					</span>
				</li>
        </Link>
        <Link to="/carts" >
				<li>
					<i class='bx bxs-cart' ></i>
					<span class="text">
						<h3>{carts}</h3>
						<h3>Carts</h3>
					</span>
				</li>
        </Link>
        <Link to='/categories'>
				<li>
					<i class='bx bxs-category' ></i>
					<span class="text">
						<h3>{categories}</h3>
						<h3>Categories</h3>
					</span>
				</li>
        </Link>
        </ul>
      )}
    </main>
  </section>
  );
};

export default Home;
