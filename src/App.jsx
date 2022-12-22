import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import React from 'react'
import MainPage from "./Pages/mainPage/mainPage";
import MyBooks from "./Pages/myBooksPage/myBooksPage";
import LoginPage from "./Pages/loginPage/loginPage";
import UserProvider, {
  UserContext,
} from "./components/provider/userProvider.component";
import { useContext, useEffect } from "react";
import MyLibraryProvider from "./components/provider/myLibraryProvider.component";
function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="App">
      <UserProvider>
        <MyLibraryProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/library" />} />
            <Route path="library" element={<MainPage />} />
            <Route path="library/myList" element={<MyBooks />} />
          </Routes>
        </MyLibraryProvider>
      </UserProvider>
    </div>
  );
}

export default App;
