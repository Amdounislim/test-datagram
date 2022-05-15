import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Users from "./Users";
import NotFound from "./NotFound";
import Categories from "./Categories";
import Products from "./Products.js";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <PrivateRoute component={Sidebar} />
              <Outlet />
            </>
          }
        >
          <Route path="home" element={<PrivateRoute component={Home} />} />
          <Route path="users" element={<PrivateRoute component={Users} />} />
          <Route
            path="carts"
            element={
              <PrivateRoute
                component={() => <h1 style={{ textAlign: "center" }}>Carts</h1>}
              />
            }
          />
          <Route
            path="products"
            element={<PrivateRoute component={Products} />}
          />
          <Route
            path="categories"
            element={<PrivateRoute component={Categories} />}
          />
          <Route index element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
