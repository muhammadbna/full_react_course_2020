import React from "react";

import "./index.css";

import { data } from "./books";
import Book from "./Book";

const BookList = () => (
  <section className="bookList">
    {data.map((book) => (
      <Book key={book.id} {...book} />
    ))}
  </section>
);

export default BookList;
