import React from 'react';
import './header.css';
// import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div className="header">
    <div>
      <div className="pages_div">

        <span className="page">
          Books
        </span>
       
        <span className="page">
          Audiobooks
        </span>
       
        <span className="page">
          Podcast
        </span>
      </div>
      <hr />
      </div>
      <input
        type="search"
        name="search"
        placeholder='Genere, author, or book name  '

      />
    </div>

  )
}

export default Header;