import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Spinner from "../../components/Spinner";
import { queryCategories } from "../../services/storeApi";
import CategorieCard from "../../components/CategorieCard";
import "./style.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getCategories = async () => {
    const users = await queryCategories();
    setCategories(users);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, [navigate]);

  return (
    <section id="content">
      <main>
      <h1>Categories</h1>
        {loading ? (
          <Spinner />
        ) : (
          <ul className="categories">
            {categories.map((cat, i) => (
              <li key={i}>
                <h1>{cat}</h1>
              </li>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Categories;
