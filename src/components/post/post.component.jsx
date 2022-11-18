import React from 'react';
import BookImage from '../../assets/images/BookImage.png';
import TitleImage from '../../assets/images/titleImg.jpg';

// import Author from '../author/author.component';
// import Actions from '../post-actions/actions.component';
import './post.css';

const Post = () => {
  return (
    <div className="post">
      {/* <Author
        author={props.post.author}
        postTime={props.post.postTime}
        postId={props.post.postId}
      /> */}
      <div className="postBook">
        <p>
          {/* {props.post.body} */}
        </p>
        <img src={TitleImage} alt="TitleImage" className='titleImg' />
        <img src={BookImage} alt="BookImage" className='bodyImg' />

      </div>
      <div className="info">
        <h4 className='bookTitle'>The Cup-Up Trilogy. The Ticket That Exploded </h4>
        <span className='authorTitle'> Wiliam Burroughs  </span>
      </div>

      {/* <Actions
        likesCount={props.post.likesCount}
        commentsCount={props.post.commentsCount}
      />   */}
    </div>

  )
}

export default Post;