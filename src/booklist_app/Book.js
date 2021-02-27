import React from "react";

const Book = ({ img, title, author }) => (
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button"></button>
  </article>
);

export default Book;
