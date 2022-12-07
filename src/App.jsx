import './App.css';
 import Post from './components/post/post.component';
 import ListItem from "./components/List/List.components";
import PostBook from './components/postBook/PostBook.components';
import AboutBook from './components/AboutBook/AboutBook.components';
import Header from './components/header/header.component';
import Login from './Pages/Login/login.pages';


function App() {

  return (
    <div className="App">
       {/*  <Header/>
    <ListItem/>
      <PostBook/>
      <Post/>
      <AboutBook/> */}
      <Login/>
    </div>
  );
}

export default App;
