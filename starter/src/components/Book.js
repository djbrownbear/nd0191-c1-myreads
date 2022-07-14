import PropTypes from "prop-types";
import ChangeShelf from "./ChangeShelf";

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

          <ChangeShelf 
            book={book} 
            shelfValue={book.shelf ? book.shelf:"none"} 
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
  changeShelf: PropTypes.func.isRequired,
}

export default Book;
