import React from "react";
import { HouseSimple, List, Heart, Book } from "phosphor-react";
import "./header.css";
import UserInfo from "../userInfo/userInfo.component";
const Header = () => {
  return (
    <div className="header">
      <UserInfo />
      <hr className="hrList" />
      <div className="icon">
        <span>
          <HouseSimple size={24} weight="bold"/>
        </span>
        <span>Home</span>
      </div>
      <div className="icon">
        <span>
          <List size={24} weight="bold"/>
        </span>
        <span>MyList</span>
      </div>
      <div className="icon">
        <span>
          <Heart size={24} weight="bold"/>
        </span>
        <span>Favorites</span>
      </div>
      <div className="icon">
        <span>
          <Book size={24} weight="bold"/>
        </span>
        <span>Reading</span>
      </div>
      <hr className="hrList" />
    </div>
  );
};

export default Header;
