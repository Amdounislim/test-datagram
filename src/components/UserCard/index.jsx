import React from "react";
import "./style.css";
import { getNameInitial } from "../../utils/formatText";
import Modal from "../Modal";

const UserCard = ({ user, removeUserById }) => {
    
  return (
    <li>
      <span className="avatar">
        {getNameInitial(user.name.firstname, user.name.lastname)}
      </span>
      <div className="text">
        <h3>
          {user.name.firstname} {user.name.lastname}
        </h3>
        <p>{user.email}</p>
        <div className="action">
        {/* <i className="bx bxs-edit">
        </i> */}
            
        <i className="bx bxs-trash" onClick={()=>removeUserById(user.id)}></i>
        </div>
      </div>
    </li>
  );
};

export default UserCard;
