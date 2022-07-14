import { useState } from "react";
import PropTypes from "prop-types";

const ChangeShelf = ({ book, shelfValue, onChangeShelf }) => {
  const [shelf,setShelf] = useState(shelfValue);

  const handleChange = ((value) => {
    console.log(`shelf updated from ${shelf !== "none" ? shelf : shelfValue} to ${value} for Book: "${book.title}"`)
    setShelf(value);
    onChangeShelf(book, value)
  });

  return (
    <div className="book-shelf-changer">
      <select 
        value={shelfValue} 
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ChangeShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelfValue: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ChangeShelf;