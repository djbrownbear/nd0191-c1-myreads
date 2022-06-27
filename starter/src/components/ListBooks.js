import BookShelf from "./BookShelf";
import { useState } from "react";
// import { Link } from "react-router-dom";

const ListBooks = ({ books, changeShelf }) => {
  const [showSearchPage, setShowSearchpage] = useState(false);

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
      {/* <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div> */}
    </div>
  ) 
}

export default ListBooks;