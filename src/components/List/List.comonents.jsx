import React from 'react'
import { HouseSimple,List,Heart,Book} from 'phosphor-react';
import Link from 'react-router-dom';
import Author from '../author/author.component';
import "./List.css"
const ListItem = () => {
  return (
    <div className='ListItem'>
      <Author/>
      <hr className='hrList'/>
      <div className='icon'>
      <HouseSimple size={24} color="#4db2ff" weight="bold"className="icon-button" /> 
      <span>Home</span>
      </div>
      <div className='icon'>
      <List size={24} color="#4db2ff" weight="bold" className="icon-button" />
      <span>MyList</span>
      </div>
      <div className='icon'>
      <Heart size={24} color="#4db2ff" weight="bold" className="icon-button" />
      <span>Favorites</span>
      </div>
     
      <div className='icon'>
      <Book size={24} color="#4db2ff" weight="bold" className="icon-button" />
      <span>Reading</span>
      </div>
      <hr className='hrList'/>



      {/* <Link to="/chat" className="icon-button"><Chats size={24} weight="bold" /></Link>
      <Link to="/addPost" className="icon-button"><PlusCircle size={24} weight="bold" /></Link>
      <Link to="/login" className="icon-button"><SignIn size={24} weight="bold" /></Link> */}


    </div>
  )
}

export default ListItem