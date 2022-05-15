import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { queryUsers } from "../../services/storeApi";
import UserCard from "../../components/UserCard";
import Spinner from "../../components/Spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getUsers = async () => {
    const users = await queryUsers();
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [navigate]);

  return (
    <section id="content">
      <main>
        <h1>Users</h1>
        {loading ? (
          <Spinner />
        ) : (
          <ul className="box-info">
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Users;
