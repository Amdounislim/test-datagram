import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const navigation = [
  {
    active: false,
    link: "Home",
    path: "/home",
    icon: "bx bxs-dashboard",
  },
  { active: true, link: "Users", path: "/users", icon: "bx bxs-group" },
  {
    active: false,
    link: "Carts",
    path: "/carts",
    icon: "bx bx bxs-cart",
  },
  {
    active: false,
    link: "Products",
    path: "/products",
    icon: "bx bxl-product-hunt",
  },
  {
    active: false,
    link: "Categories",
    path: "/categories",
    icon: "bx bxs-category",
  },
];

const Sidebar = () => {
  const [nav, setNav] = useState(navigation);
  return (
    <section id="sidebar">
      <Link to="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">Store Admin</span>
      </Link>
      <ul className="side-menu top">
        {nav.map((element) => (
          <li key={element.link} className={element.active ? "active" : ""}>
            <Link
              to={element.path}
              onClick={() =>
                setNav(
                  nav.map((el) =>
                    el.path === element.path
                      ? { ...el, active: true }
                      : { ...el, active: false }
                  )
                )
              }
            >
              <i className={element.icon}></i>
              <span className="text">{element.link}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/login"
            className="logout"
            onClick={() => localStorage.removeItem("token")}
          >
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
