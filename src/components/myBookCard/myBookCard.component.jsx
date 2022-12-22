import React from "react";
import defaultImage from "../../assets/images/default.jpg";

const MyBookCard = (props) => {
    const {book} = props;
  return (
    <div className="card">
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

export default MyBookCard;
