import React from "react";
import "./bookList.css";
import BookCard from "../bookCard/bookCard.component";

const BookList = (props) => {
  let { library, setBookDetails, getBook} = props;
  return (
    <div className="books">
      <h1>Books Library</h1>
      <div className="cards">
        {library.map((book) => {
          return (
            <BookCard
              key={book.id}
              book={book}
              setBookDetails={setBookDetails}
              getBook={getBook}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
