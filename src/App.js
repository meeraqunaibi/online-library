import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import { useState } from "react";
import DataFetching from "./dataFetching";

function App() {
  const [library, setLibrary] = useState([]);

  return (
    <div className="App">
      <DataFetching setLibrary={setLibrary} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage library={library}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
