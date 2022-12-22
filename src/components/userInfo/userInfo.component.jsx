import React from 'react';
import './userInfo.css';
import { useContext } from 'react';
import { UserContext } from '../provider/userProvider.component';
const UserInfo = () => {
  let {user} = useContext(UserContext);
  return (
    <div className="userInfo">
      <img src={user?.picture} width={50} height={50} alt="user" />
      <div className="info">
        <h2>{user?.name}</h2>
        <span> {user?.email} </span>

      </div>
    </div>
  )
}

export default UserInfo