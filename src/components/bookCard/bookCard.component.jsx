import React from "react";
import "./bookCard.css";
import defaultImage from "../../assets/images/default.jpg";

const BookCard = (props) => {
  const { book } = props;
  return (
    <div
      className="card"
      onClick={() => {
        props.setBookDetails(true);
        props.getBook(book.id)
      }}
    >
      {book?.volumeInfo?.imageLinks?.thumbnail ? (
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="book image" />
      ) : (
        <img src={defaultImage} alt="book image" />
      )}
      <span>{book.volumeInfo.title}</span>
      <span>{book.volumeInfo.authors}</span>
    </div>
  );
};

export default BookCard;
