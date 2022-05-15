import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { queryProducts } from "../../services/storeApi";
import Spinner from "../../components/Spinner";
import ProductCard from "../../components/ProductCard";
import { deleteProduct } from "../../services/storeApi";
import "./style.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getProducts = async () => {
    const products = await queryProducts();
    setProducts(products);
    setLoading(false);
  };

  const removeProductById = async (id) => {
    const confirmlDelete = window.confirm("Are you sure you want to delete");
    if (!confirmlDelete) return;
    try {
      await deleteProduct(id);
      setProducts(products.filter((prod) => prod.id !== id));
      // alert('Product Deleted with success')
    } catch (error) {
      alert("Product Delete failed");
    }
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
              <ProductCard
                prod={prod}
                key={prod.id}
                removeProductById={removeProductById}
              />
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Products;
