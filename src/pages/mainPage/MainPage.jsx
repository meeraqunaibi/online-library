import React from "react";
import BookList from "../../components/bookList/bookList.component";
import SideBar from "../../components/sideBar/sideBar.component";
import UserBook from "../../components/userBook/userBook.components";
import "./mainPage.css"

const MainPage = (props) => {
  const { library } = props;
  return (
    <div className="content">
      <div className="sec1">
        <SideBar />
      </div>
      <div className="sec2">
        <BookList library={library} />
      </div>
      {/* <div className="sec2">
        <UserBook />
      </div> */}
    </div>
  );
};

export default MainPage;
