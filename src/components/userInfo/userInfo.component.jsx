import React from 'react';
import './userInfo.css';
import userImg from '../../assets/images/user.png';
const UserInfo = (props) => {
  return (
    <div className="userInfo">
      <img src={userImg} width={50} height={50} alt="Placeholder User Image" />
      <div className="info">
        <h2>Mak DeMarco</h2>
        <span> @MakDeMacor  </span>

      </div>
    </div>
  )
}

export default UserInfo