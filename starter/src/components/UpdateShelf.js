import { useState } from "react";
import PropTypes from "prop-types";

const UpdateShelf = ({ book, onUpdateShelf }) => {
  const [shelf, setShelf] = useState("");

  const changeShelf = ((value) => {
    setShelf(value);
    onUpdateShelf(book, value)
  });

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => changeShelf(e.target.value)}>
        <option value="none" disabled>
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

UpdateShelf.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
};

export default UpdateShelf;