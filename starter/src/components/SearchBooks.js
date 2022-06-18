import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// TODO - add link to go back to the main bookshelf page
// import { Link } from "react-router-dom";

const SearchBooks = ({ books }) =>{
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query);
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingBooks = 
    query === ""
    ? books
    : books.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className='search-books'>
      <div className="search-books-bar">
        <a
          className="close-search"
          // onClick={() => {} setShowSearchpage(!showSearchPage)}
        >
          Close
        </a>
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
          {showingBooks.map((book,index) => (
            <li key={index}>{book.title}</li>
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

