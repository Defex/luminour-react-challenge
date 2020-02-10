import React from 'react';
import BookForm from './BookForm';
import { Book } from '../reducers/books/types';
import { useBookActions } from '../reducers/books/hooks';
import { Grid, Button } from '@material-ui/core';
import { uuid } from 'uuidv4';

const initialBookFields = {
  id: 'Created on initialization',
  title: '',
  author: '',
  published_date: new Date().toISOString().split('T')[0],
  book_cover: '',
  quantity: 1,
};

const BookCreateForm = ({ initialFields }: { initialFields?: Book }) => {
  const { addBooks } = useBookActions();
  const handleAddClick = (bookFields: Book) => () => addBooks([{ ...bookFields, id: uuid() }]);
  return (
    <BookForm
      book={initialFields || initialBookFields}
      actions={(updatedBook: Book) => (
        <Grid container justify="flex-end">
          <Button type="button" onClick={handleAddClick(updatedBook)} color="primary">
            Create Book
          </Button>
        </Grid>
      )}
    />
  );
};

export default BookCreateForm;
