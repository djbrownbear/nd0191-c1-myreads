import Book from "./Book";

const BookShelf = ({ title, shelf, books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter((book) => book.shelf === shelf).map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
        </ol>
      </div>
    </div>
  )
};

export default BookShelf;