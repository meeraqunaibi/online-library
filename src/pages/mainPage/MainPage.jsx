import React from "react";
import { useState } from "react";
import AboutBook from "../../components/AboutBook/AboutBook.components";
import BookList from "../../components/bookList/bookList.component";
import SideBar from "../../components/sideBar/sideBar.component";
import "./mainPage.css";

const MainPage = (props) => {
  const { library } = props;
  const [bookDetails, setBookDetails] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  const getBook = (cid) => {
    const book = library.find(({ id }) => id === cid);
    setCurrentBook(book)
  };
  return (
    <div className="content">
      <div className="sec1">
        <SideBar />
      </div>
      <div className="sec2">
        <BookList
          setBookDetails={setBookDetails}
          getBook={getBook}
          library={library}
        />
      </div>
      {bookDetails ? (
        <div className="sec3">
          <AboutBook currentBook={currentBook} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainPage;
