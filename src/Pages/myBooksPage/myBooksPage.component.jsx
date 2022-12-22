import SideBar from "../../components/sideBar/sideBar.component";
import React from "react";
import { useContext } from "react";
import MyBookCard from "../../components/myBookCard/myBookCard.component";
import { MyLibraryContext } from "../../components/provider/myLibraryProvider.component";
import "./myBooksPage.css";

const MyBooks = () => {
  const { myLibrary } = useContext(MyLibraryContext);

  return (
    <div className="content">
      <div className="sec1">
        <SideBar />
      </div>
      <div className="sec2 books">
        <h1>My List</h1>
        <div className="my-books">
          {myLibrary.map((book) => {
            return <MyBookCard key={book.id} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
