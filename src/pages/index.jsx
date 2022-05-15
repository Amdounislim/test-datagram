import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import PublicRoute from './PublicRoute'
import Login from "./Login";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Users from "./Users";

// const Custom = () => {
//   return (
//     <>
//       <PrivateRoute component={Sidebar} />
//       <Outlet />
//     </>
//   );
// };

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<PrivateRoute component={Sidebar} />} />
        <Route path="/*">
          <Route path="home" element={<PrivateRoute component={Home} />} />
          <Route path="users" element={<PrivateRoute component={Users} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
