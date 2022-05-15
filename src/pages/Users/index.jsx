import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { queryUsers, sortUser } from "../../services/storeApi";
import UserCard from "../../components/UserCard";
import Spinner from "../../components/Spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  const getUsers = async () => {
    const users = await queryUsers()
    setUsers(users)
    setLoading(false)
  }

  const orderdUsers=async()=>{
    const users = await sortUser();
    setUsers(users)
  }

  useEffect(() => {
    getUsers();
  }, [navigate]);

  return (
    <section id="content">
      <main>
        <h1>Users</h1>
        <div className="search">
          <div className="form-input">
            <input
              type="search"
              placeholder="Search by full_name..."
              onChange={(e) => setFullName(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <i className="bx bx-search"></i>
            </button>
          </div>
          <div className="form-input">
            <input
              type="search"
              placeholder="Search by email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <i className="bx bx-search" ></i>
            </button>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <ul className="box-info">
            {users
              .filter(
                (user) =>
                  user.email
                    .toLocaleLowerCase()
                    .includes(email.toLocaleLowerCase().trim()) &&
                  user.username
                      .toLocaleLowerCase()
                      .includes(fullName.toLocaleLowerCase().trim())
              )
              .map((user) => (
                <UserCard user={user} key={user.id} />
              ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Users;
