import './App.css';
 import Post from './components/post/post.component';
 import ListItem from "./components/List/List.comonents";
import PostBook from './components/postBook/PostBook.components';


function App() {

  return (
    <div className="App">
    
      <ListItem/>
      <PostBook/>
      <Post/>
      
    </div>
  );
}

export default App;
