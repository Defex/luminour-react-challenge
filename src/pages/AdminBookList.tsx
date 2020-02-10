import React from "react";
import { useAllowAdmin } from "../reducers/users/hooks";
import { useGetBooks } from "../reducers/books/hooks";
import { CircularProgress } from "@material-ui/core";
import BookEditForm from "../components/BookEditForm";
import BookCreateForm from "../components/BookCreateForm";

const AdminBookList = () => {
  useAllowAdmin();
  const { books, loading } = useGetBooks(true);
  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && (
        <div>
          <BookCreateForm />
          {books.map(book => (
            <BookEditForm
              key={book.id}
              book={book}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBookList;
