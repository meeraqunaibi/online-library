import React, { useState } from "react";

export const MyLibraryContext = React.createContext({});
const getMyLibrary = () => {
  const userLibrary = JSON.parse(localStorage.getItem("my-library"));
  return userLibrary || [];
};
const MyLibraryProvider = (props) => {
  const [myLibrary, setMyLibrary] = useState(getMyLibrary());

  return (
    <MyLibraryContext.Provider value={{ myLibrary, setMyLibrary }}>
      {props.children}
    </MyLibraryContext.Provider>
  );
};

export default MyLibraryProvider;
