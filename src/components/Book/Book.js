import React from "react";

import "./Book.css";

function Book(props) {
  return (
    <div className="Book border border-info rounded">
      <p className="fs-5 my-1">Book name:</p>
      <p className="fs-5 cut-text mb-3" title={props.book.Name}>
        {props.book.Name}
      </p>
      <p className="fs-5 cut-text">Author: {props.book.Author}</p>
      <p className="fs-5">User rating: {props.book["User Rating"]}</p>
    </div>
  );
}

export default Book;
