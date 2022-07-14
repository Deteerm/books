import "./App.css";
import { useState } from "react";

import Book from "./components/Book/Book";
const booksInitial = require("./books.json");

function App() {
  const [books, setBooks] = useState(booksInitial);
  const handleSort = (event) => {
    const value = event.target.innerText;
    const booksCopy = [...books];

    booksCopy.sort((a, b) => {
      const nameA = a[value];
      const nameB = b[value];

      console.log(value, a, b);

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setBooks(booksCopy);
  };

  return (
    <div className="App bg-light">
      <div className="nav navbar w-100 border border-primary border-start-0 border-end-0 mb-2">
        <span className="fs-4 mx-2">Sortby:</span>
        <div>
          <button onClick={handleSort} className="btn btn-outline-primary mx-2">
            Name
          </button>
          <button onClick={handleSort} className="btn btn-outline-primary mx-2">
            Author
          </button>
          <button onClick={handleSort} className="btn btn-outline-primary mx-2">
            User Rating
          </button>
        </div>
      </div>
      {books.slice(0, 100).map((book, i) => {
        return <Book key={i} book={book}></Book>;
      })}
    </div>
  );
}

export default App;
