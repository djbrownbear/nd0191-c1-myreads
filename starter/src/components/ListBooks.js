import { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const ListBooks = ({ books }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) =>{
    setQuery(query.trim());
  };

  const clearQuery = (query) => {
    updateQuery("");
  };

  
}