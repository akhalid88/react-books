import React, { useEffect, useState } from "react";
import Card from "../card/card";
import API from "../../utils/API";
import "./container.css";

function Container() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    allBooks();
  }, [books]);

  const allBooks = () => {
    API.getBooks()
      .then(results => {
        setBooks(results.data);
      });
  }

  const handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    allBooks();
  }


  return (
    <div className="container is-widescreen">
      <div className="notification">
        <h1 className="resultsSearch">Saved Books:</h1>
        {books.map(book => (
          <Card
            key={book._id}
            id={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            handleDeleteButton={handleDeleteButton}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;