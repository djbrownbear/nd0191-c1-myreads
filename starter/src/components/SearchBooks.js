import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";

const SearchBooks = ({ books, changeShelf }) =>{
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const updateQuery = async (query) => {
    setQuery(query);

    console.log(query)
    await BooksAPI.search(query)
      .then((resBooks) => {
        if(Array.isArray(resBooks)) {
          resBooks.forEach((book) => {
            books.forEach((bk) => {
              if (book.id === bk.id) {
                book.shelf = bk.shelf; 
              }
            });
          });
          setSearchedBooks(
            resBooks.filter(
              (book) => book.authors !== undefined && book.imageLinks !== undefined
            )
          );
        } else {
          setSearchedBooks([]);
        }
      })
  };

  return (
    <div className='search-books'>
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book,index) => (
            <Book key={index} book={book} shelfValue={book.shelf} changeShelf={changeShelf} />
          ))}
        </ol>
      </div>
    </div>
  )
};

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
}

export default SearchBooks;

