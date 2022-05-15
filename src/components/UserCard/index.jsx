import React from 'react'
import './style.css'
import { getNameInitial } from '../../utils/formatText'
import { Link } from 'react-router-dom'

const UserCard = ({ user, removeUserById, withDetails = false }) => {
  return (
    <li>
      <span className='avatar'>
        {getNameInitial(user.name.firstname, user.name.lastname)}
      </span>
      <div className='text'>
        <h3>
          {user.name.firstname} {user.name.lastname}
        </h3>
        <p>{user.email}</p>
        {withDetails && (
          <>
            <p>{user.phone}</p>
            <p>
              {user.address.city}, {user.address.number}, {user.address.street}{' '}
            </p>
          </>
        )}

        {!withDetails && (
          <div className='action'>
            <i
              className='bx bxs-trash'
              onClick={() => removeUserById(user.id)}
            ></i>

            <span>
              <Link to={`/users/${user.id}`}>Show details ...</Link>{' '}
            </span>
          </div>
        )}
      </div>
    </li>
  )
}

export default UserCard
