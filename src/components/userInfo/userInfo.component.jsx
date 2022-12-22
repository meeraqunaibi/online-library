import React from 'react';
import './userInfo.css';
import userImg from '../../assets/images/user.png';
import { useContext } from 'react';
import { UserContext } from '../provider/userProvider.component';
const UserInfo = () => {
  let {user} = useContext(UserContext);
  return (
    <div className="userInfo">
      <img src={user?.picture} width={50} height={50} alt="Placeholder User Image" />
      <div className="info">
        <h2>{user?.name}</h2>
        <span> {user?.email} </span>

      </div>
    </div>
  )
}

export default UserInfo