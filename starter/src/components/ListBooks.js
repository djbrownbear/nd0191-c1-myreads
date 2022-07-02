import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

const ListBooks = ({ books, changeShelf }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf 
            title="Currently Reading"
            shelf="currentlyReading"
            books={books}
            changeShelf={changeShelf}
          />
          
          <BookShelf
            title="Want to Read"
            shelf="wantToRead"
            books={books}
            changeShelf={changeShelf}
          />
          
          <BookShelf
            title="Read"
            shelf="read"
            books={books}
            changeShelf={changeShelf}
          />
        </div>
      </div>
      {<div className="open-search">
        <Link to="/search" className="a"> Add a book</Link>
      </div>}
    </div>
  ) 
}

export default ListBooks;