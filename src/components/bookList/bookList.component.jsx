import React from "react";
import BookCard from "../bookCard/bookCard.component";

const BookList = (props) => {
  let { library } = props;
  return (
    <div>
      {library.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
