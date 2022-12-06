import { CaretRight } from 'phosphor-react';
import React from 'react'
import TitleImage from '../../assets/images/titleImg.jpg';
import './userBook.css'
const UserBook = () => {
  return (
    <div className="BookPost">

      <img src={TitleImage} alt="TitleImage" className='titleImg' />
      <div className="InfoBook">
        <div className="Book">
          <h4 className='bookTitle'>The Cup-Up Trilogy. The Ticket That Exploded </h4>
          <span className='authorTitle'> Wiliam Burroughs  </span>
        </div>
        <div className="bookInfo">
          <div className="smallInfo">
            <span> 200  </span>
            <span className='info'> pages </span>
          </div>
          |
          <div className="smallInfo">
            <span> 24 </span>
            <span className='info'> reviews </span>
          </div>
          |
          <div className="smallInfo">
            <span>150 </span>
            <span className='info'> ratings </span>
          </div>

        </div>

      </div>
      <CaretRight size={40} color="#fff" weight="bold"  className="icon-button" />
   

    </div>

  )
}

export default UserBook;