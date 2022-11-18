import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const DataFetching = (props) => {
    let {setLibrary} = props
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=%22%22%&maxResults=30&key=AIzaSyAHmyqK6zsP9PJEjjas6jLRiZNTvvC5lWk"
      );
      setLibrary(response.data.items);
      console.log(response.data.items[2]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
    </div>
  );
};

export default DataFetching;
