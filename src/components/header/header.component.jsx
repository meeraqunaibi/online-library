import React, { useState } from "react";
import "./header.css";
import { MagnifyingGlass } from "phosphor-react";
// import { Link } from 'react-router-dom';

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="header">
      <div className="types">
        <span
          className="type"
          onClick={() => {
            props.setType("all");
          }}
        >
          All
        </span>
        <span
          className="type"
          onClick={() => {
            props.setType("books");
          }}
        >
          Books
        </span>
        <span className="type" onClick={() => props.setType("magazines")}>
          Magazines
        </span>
      </div>
      <div className="search-input">
        <input
          type="search"
          name="search"
          value={searchInput}
          placeholder="Book name"
          onChange={(e) => {
            setSearchInput(e.currentTarget.value);
          }}
        />
        <MagnifyingGlass
          onClick={() => {
            props.setTitle(searchInput);
            setSearchInput("");
            console.log(searchInput);
          }}
          className="search-icon"
          size={24}
          weight={"bold"}
        />
      </div>
    </div>
  );
};

export default Header;
