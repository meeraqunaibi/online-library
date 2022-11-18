import { useState } from 'react';
import './App.css';
import BookList from './components/bookList/bookList.component';
import DataFetching from './dataFetching';

function App() {
  const [library, setLibrary] = useState([]);
  return (
    <div className="App">
    <DataFetching setLibrary={setLibrary} />
    <BookList library={library}/>
    </div>
  );
}

export default App;
