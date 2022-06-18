import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div className="book">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
            `url(${book.imageLinks.smallThumbnail})`,
        }}
        ></div>
    </div>  
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
  );
};

export default Book;
