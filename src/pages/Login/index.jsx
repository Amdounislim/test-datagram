import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/storeApi";

import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard", { replace: true });
    }
    setLoading(false);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await login(form.username, form.password)
      await login();
      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const handleChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div class="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="txt_field">
          <input type="text" required onChange={handleChange} name="username" />
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input
            type="password"
            required
            onChange={handleChange}
            name="username"
          />
          <label>Password</label>
        </div>
        <div class="pass">Forgot Password ?</div>
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
