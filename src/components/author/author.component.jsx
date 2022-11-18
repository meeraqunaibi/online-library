import React from 'react';
import './author.css';
import userImg from '../../assets/images/user.png';
// import {Link} from 'react-router-dom'
const Author = (props) => {

  return (
    <div className="author">
      <img src={userImg} width={50} height={50} alt="Placeholder User Image" />
      <div className="info">
        <h2>Mak DeMarco</h2>
        <span> @MakDeMacor  </span>

      </div>
    </div>
  )
}

export default Author