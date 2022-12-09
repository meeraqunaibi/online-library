import React from "react";
import {
  HouseSimple,
  List,
  Heart,
  Book,
  Gear,
  SignOut,
  Question,
} from "phosphor-react";
import "./sideBar.css";
import UserInfo from "../userInfo/userInfo.component";
const SideBar = () => {
  return (
    <div className="header">
      <UserInfo />
      <hr className="hrList" />
      <div className="icon">
        <span>
          <HouseSimple size={24} weight="bold" />
        </span>
        <span>Home</span>
      </div>
      <div className="icon">
        <span>
          <List size={24} weight="bold" />
        </span>
        <span>MyList</span>
      </div>
      <div className="icon">
        <span>
          <Heart size={24} weight="bold" />
        </span>
        <span>Favorites</span>
      </div>
      <div className="icon">
        <span>
          <Book size={24} weight="bold" />
        </span>
        <span>Reading</span>
      </div>
      <hr className="hrList" />
      <div className="icon">
        <span>
          <Gear size={24} />
        </span>
        <span>Setting</span>
      </div>
      <div className="icon">
        <span>
          <Question size={24} />
        </span>
        <span>Support</span>
      </div>
      <div className="icon">
        <span>
          <SignOut size={24} />
        </span>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
