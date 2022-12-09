import React from 'react'
import { HouseSimple,List,Heart,Book} from 'phosphor-react';
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


    </div>
  )
}

export default ListItem