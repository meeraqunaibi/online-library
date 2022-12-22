import React, { useState } from "react";
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
import { UserContext } from "../provider/userProvider.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SideBar = () => {
  const navigate = useNavigate();
  const { handleLogout, user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="sidebar">
      <UserInfo />
      <hr className="hrList" />
      <div
        className="icon"
        onClick={() => {
          navigate("/library");
        }}
      >
        <span>
          <HouseSimple size={24} weight="bold" />
        </span>
        <span>Home</span>
      </div>
      <div
        className="icon"
        onClick={() => {
          navigate("/library/myList");
        }}
      >
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
        <span onClick={handleLogout}>Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
