import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext({}); // 1
const getLoggedInUser = () => {
  const localUser = JSON.parse(localStorage.getItem("library-user"));
  return localUser || null;
};

const UserProvider = (props) => {
  const [user, setUser] = useState(getLoggedInUser());
  const navigate = useNavigate();

  const handleUserLogin = (response) => {
    console.log("encoded id token" + response.credential);
    let loggedInUser = jwt_decode(response.credential);
    setUser(loggedInUser);
    navigate("/library");
    localStorage.setItem('library-user', JSON.stringify(loggedInUser));
    console.log(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('library-user');
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, handleUserLogin, handleLogout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
