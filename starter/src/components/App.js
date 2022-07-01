import "../css/App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () =>{
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const changeShelf = (book, shelf) => {
    const update = aync => {
      BooksAPI.update(book, shelf);

      book.shelf = shelf
      const updatedBooks = books.filter(b => b.id != book.id)
      setBooks(updatedBooks.concat(book));
    };

    update();
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks books={books} changeShelf={changeShelf}/>
      ) : (
        <ListBooks books={books} changeShelf={changeShelf} />
      )}
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}

export default App;
