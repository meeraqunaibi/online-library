import React from "react";
import "./AboutBook.css";
// import BookImage from "../../assets/images/BookImage.png";
import defaultImage from "../../assets/images/default.jpg";

const AboutBook = (props) => {
  let { currentBook } = props;
  return (
    <div className="AboutBook">
      <div className="Book">
        <h3 className="title">About the book</h3>
        {currentBook?.volumeInfo?.imageLinks?.thumbnail ? (
          <img
            src={currentBook?.volumeInfo?.imageLinks?.thumbnail}
            alt="book image"
            className="titleImg"
          />
        ) : (
          <img className="titleImg" src={defaultImage} alt="book image"/>
        )}
        <span className="bookTitle">{currentBook.volumeInfo.title}</span>
        <span className="authorTitle">{currentBook.volumeInfo.authors}</span>
      </div>
      <div className="bookInfo">
        <div className="smallInfo">
          <span>{currentBook.volumeInfo.pageCount}</span>
          <span>pages</span>
        </div>
        |
        <div className="smallInfo">
          {currentBook.volumeInfo.averageRating ? (
            <span>{currentBook.volumeInfo.averageRating}</span>
          ) : (
            0
          )}
          <span>reviews</span>
        </div>
        |
        <div className="smallInfo">
          {currentBook.volumeInfo.ratingsCount ? (
            <span>{currentBook.volumeInfo.ratingsCount}</span>
          ) : (
            0
          )}
          <span>rating</span>
        </div>
      </div>
      {currentBook.volumeInfo.description?
      (<div className="plot">
        <div className="divPlot">Plot</div>
        <p>{currentBook.volumeInfo.description}</p>
      </div>):""}
      <button className="Read">Read</button>
    </div>
  );
};

export default AboutBook;
