import PropTypes from "prop-types";
import ChangeShelf from "./ChangeShelf";
// import { Link } from "react-router-dom";

const Book = ({ book, changeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>

          <ChangeShelf book={book} onChangeShelf={book, changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default Book;
