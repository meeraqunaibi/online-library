import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const DataFetching = (props) => {
  let { setLibrary, type, title } = props;
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=corona&printType=${type}&key=AIzaSyCGljOT74A5ZdUEAkSITVuqA1xe4K3r6nA`
      );
      setLibrary(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  const searchData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}+intitle&&key=AIzaSyCGljOT74A5ZdUEAkSITVuqA1xe4K3r6nA`
      );
      setLibrary(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);
  useEffect(() => {
    searchData();
  }, [title]);
  return <div></div>;
};

export default DataFetching;
