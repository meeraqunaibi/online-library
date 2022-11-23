import React from 'react'
import './AboutBook.css'
import BookImage from '../../assets/images/BookImage.png';

const AboutBook= () => {
  return (
    <div className='AboutBook'>
        <div className="Book">
        <div className='header'>About the book</div>

        <img src={BookImage} alt="TitleImage" className='titleImg' />
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
      <div className='Plot'>
        <div className='divPlot'>Plot</div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam fugit, dolorem architecto fugiat adipisci veniam rem sit omnis rerum perspiciatis magni consequatur voluptatem consequuntur eos, eveniet quo modi ex.</p>
      </div>
       <button className="Read">Read</button>
    </div>
  )
}

export default AboutBook