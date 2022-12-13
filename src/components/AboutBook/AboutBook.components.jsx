import React, { useState } from "react";
import "./AboutBook.css";
// import BookImage from "../../assets/images/BookImage.png";
import defaultImage from "../../assets/images/default.jpg";
import { Typography } from "antd";

const AboutBook = (props) => {
  const { Paragraph } = Typography;
  let { currentBook } = props;
  const [more, setMore] = useState(false);
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
          <img className="titleImg" src={defaultImage} alt="book image" />
        )}
        <span className="bookTitle">{currentBook.volumeInfo.title}</span>
        <span className="authorTitle">{currentBook.volumeInfo.authors}</span>
      </div>
      <div className="bookInfo">
        <div className="smallInfo">
          {currentBook.volumeInfo.pageCount ? (
            <span>{currentBook.volumeInfo.pageCount}</span>
          ) : (
            <span>unknown</span>
          )}
          <span className="authorTitle">pages</span>
        </div>
        |
        <div className="smallInfo">
          {currentBook.volumeInfo.averageRating ? (
            <span>{currentBook.volumeInfo.averageRating}</span>
          ) : (
            0
          )}
          <span className="authorTitle">reviews</span>
        </div>
        |
        <div className="smallInfo">
          {currentBook.volumeInfo.ratingsCount ? (
            <span>{currentBook.volumeInfo.ratingsCount}</span>
          ) : (
            0
          )}
          <span className="authorTitle">rating</span>
        </div>
      </div>
      {currentBook.volumeInfo.description ? (
        <div className="plot">
          <div className="divPlot">Plot</div>
          <Paragraph
            className="book-description"
            ellipsis={
              !more ? { rows: 2, expandable: true, symbol: "more" } : true
            }
          >
            {currentBook.volumeInfo.description}
          </Paragraph>
        </div>
      ) : (
        ""
      )}
      <button
        className="Read"
        onClick={() => {
          setMore(true);
        }}
      >
        Read
      </button>
    </div>
  );
};

export default AboutBook;
