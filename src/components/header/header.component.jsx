import React from 'react';
import './header.css';
// import { Bell, Chats,PlusCircle ,SignIn} from 'phosphor-react';
// import { Link } from 'react-router-dom';

const Header = () => {
 
   
  return (
    <div className="header">
      {/* <Link to="/feed"><img src={logo} alt="logo" height="50px" /></Link> */}
      <div className="actions">
        

        {/* <Link className="icon-button"><Bell size={24} weight="bold" /></Link>
        <Link to="/chat" className="icon-button"><Chats size={24} weight="bold" /></Link>
        <Link to="/addPost" className="icon-button"><PlusCircle size={24} weight="bold" /></Link>
        <Link to="/login" className="icon-button"><SignIn size={24} weight="bold" /></Link> */}

      </div>
    </div>
  )
}

export default Header;