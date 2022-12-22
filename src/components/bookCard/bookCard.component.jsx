import React, { useContext } from "react";
import "./bookCard.css";
import defaultImage from "../../assets/images/default.jpg";
import { BookOpen } from "phosphor-react";
import { MyLibraryContext } from "../provider/myLibraryProvider.component";


const BookCard = (props) => {
  const { book } = props;
  const { myLibrary, setMyLibrary } = useContext(MyLibraryContext);
  const handleClick = () => {
    console.log(myLibrary);
    const addedBook = {...book, added:true}
    setMyLibrary([...myLibrary, addedBook]);
    localStorage.setItem('my-library', JSON.stringify(myLibrary));
  };
  return (
    <div
      className="card"
      onClick={() => {
        props.setBookDetails(true);
        props.getBook(book.id);
      }}
    >
      {book?.volumeInfo?.imageLinks?.thumbnail ? (
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="book" />
      ) : (
        <img src={defaultImage} alt="book" />
      )}
      <span>{book.volumeInfo.title}</span>
      <span>{book.volumeInfo.authors}</span>
      <BookOpen className="add-book" size={32} onClick={handleClick} />
    </div>
  );
};

export default BookCard;
