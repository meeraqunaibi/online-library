import './App.css';
import { useState,useEffect } from 'react';

import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';
// import Feed from './pages/feed/feed.page';
// import Chat from './pages/chat/chat.page';
// import Header from './components/header/header.component';
// import NotFound from './pages/not-found/not-found.page';
// import ViewPost from './pages/view-post/view-post.page';
// import AddPost  from "./pages/AddPost/addPost.pages";
// import Login from './pages/Login/Login.pages';
// import { TEMP_POSTS } from './data/temp_data';
 import Post from './components/post/post.component';
 import ListItem from "./components/List/List.comonents";


function App() {
//  const[query,setQuery]= useState('');
//   const[likes,setLikes]= useState('');

//  const[posts,setPosts]=useState([]);

// const fetchPosts=()=>{
//   const postsFromStorage=JSON.parse(localStorage.posts||'[]');
//   if (postsFromStorage.length===0) {
//     localStorage.posts=JSON.stringify(TEMP_POSTS);
//     setPosts(TEMP_POSTS);
//   } else {
//     setPosts(postsFromStorage);
//   }
// }

// useEffect(()=>fetchPosts(),[]);
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header query={query} setQuery={setQuery} setLikes={setLikes}/>

        <Routes>
          <Route path="/" element={< Navigate to ="/feed "  />}  />
          <Route path="feed" element={<Feed query={query}likes={likes}  posts={posts} />} />
          <Route path="chat" element={<Chat />} />
          <Route path="feed/:id"  element={<ViewPost />} />
          <Route path="addPost" element={<AddPost onAddPost={fetchPosts} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
      <ListItem/>
    </div>
  );
}

export default App;
