import React from "react";
import defaultImage from "../../assets/images/default.jpg";

const BookCard = (props) => {
  const { book } = props;
  return (
    <div>
      {book?.volumeInfo?.imageLinks?.thumbnail ? (
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="book image" />
      ) : (
        <img src={defaultImage} alt="book image" />
      )}
      {book.volumeInfo.title}
    </div>
  );
};

export default BookCard;
