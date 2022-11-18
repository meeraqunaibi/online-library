import React from "react";
import BookList from "../../components/bookList/bookList.component";
import Header from "../../components/header/header.component";
import "./mainPage.css"

const MainPage = (props) => {
  const { library } = props;
  return (
    <div className="content">
      <div className="sec1">
        <Header />
      </div>
      <div className="sec2">
        <BookList library={library} />
      </div>
    </div>
  );
};

export default MainPage;
