import "../css/App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () =>{
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const changeShelf = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      book.shelf = shelf  
      const updatedBooks = books.filter(b => b.id !== book.id)
      setBooks(updatedBooks.concat(book));
    };

    update();
  }

  return (
    <Routes>
      <Route 
        exact path="/"
        element= {
          <ListBooks books={books} changeShelf={changeShelf} />
        }
      />
      <Route 
        path="/search"
        element= {
          <SearchBooks books={books} changeShelf={changeShelf}/>
        }
      />
    </Routes>
  );
}

export default App;
