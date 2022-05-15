import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Spinner from "../../components/Spinner";
import { queryProducts } from "../../services/storeApi";
import "./style.css";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getProducts = async () => {
    const products = await queryProducts();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [navigate]);

  return (
    <section id="content">
      <main>
        <h1>Products</h1>
        {loading ? (
          <Spinner />
        ) : (
          <ul className="categories">
            {products.map((prod) => (
              <ProductCard prod={prod} key={prod.id} />
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Products;
