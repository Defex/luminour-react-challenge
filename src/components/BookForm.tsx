import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Book } from '../reducers/books/types';

const BookForm = ({ book, actions }: { book: Book; actions: Function }) => {
  /*eslint-disable */
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [published_date, setPublishedDate] = useState(new Date(book.published_date).toISOString().split('T')[0]);
  const [book_cover, setBookCover] = useState(book.book_cover);
  const [quantity, setQuantity] = useState(book.quantity);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField type="text" value={book.id} required disabled label="id" fullWidth />
      </div>
      <div>
        <TextField
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          label="title"
          fullWidth
        />
      </div>
      <div>
        <TextField
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
          label="author"
          fullWidth
        />
      </div>
      <div>
        <TextField
          type="date"
          value={published_date}
          onChange={e => setPublishedDate(e.target.value)}
          required
          label="published_date"
          fullWidth
        />
      </div>
      <div>
        <img src={book_cover} />
        <TextField
          type="text"
          value={book_cover}
          onChange={e => setBookCover(e.target.value)}
          required
          label="book_cover"
          fullWidth
        />
      </div>
      <div>
        <TextField
          type="number"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
          required
          label="quantity"
          fullWidth
        />
      </div>
      {actions({
        id: book.id,
        title,
        author,
        published_date,
        book_cover,
        quantity,
      })}
    </form>
  );
};

export default BookForm;
