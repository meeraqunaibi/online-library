import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AboutBook from "../../components/AboutBook/AboutBook.components";
import BookList from "../../components/bookList/bookList.component";
import Header from "../../components/header/header.component";
import SideBar from "../../components/sideBar/sideBar.component";
import DataFetching from "../../dataFetching";
import "./mainPage.css";

const MainPage = (props) => {
  const [bookDetails, setBookDetails] = useState(false);
  const [currentBook, setCurrentBook] = useState({});
  const [library, setLibrary] = useState([]);
  const [type, setType] = useState("all");
  const [title, setTitle] = useState("");
  const getBook = (cid) => {
    const book = library.find(({ id }) => id === cid);
    setCurrentBook(book);
  };
  return (
    <div>
      <DataFetching setLibrary={setLibrary} type={type} title={title} />
      <div className="content">
        <div className="sec1">
          <SideBar />
        </div>
        <div className="sec2">
          <Header setType={setType} setTitle={setTitle}/>
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
    </div>
  );
};

export default MainPage;
