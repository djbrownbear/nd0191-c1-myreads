import PropTypes from "prop-types";
import ChangeShelf from "./ChangeShelf";
// import { Link } from "react-router-dom";

const Book = ({ book, shelfValue, changeShelf }) => {
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

          <ChangeShelf 
            book={book} 
            shelfValue={shelfValue} 
            onChangeShelf={changeShelf} 
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfValue: PropTypes.string.isRequired,
  changeShelf: PropTypes.array.isRequired,
}

export default Book;
