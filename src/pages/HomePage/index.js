import React from "react";
import { useGetBooks } from "../../reducers/books/hooks";
import { CircularProgress, Grid } from "@material-ui/core";
import Book from "./Book";
import { useCartItemsActions } from "../../reducers/cart/hooks";
import Cart from "../../components/Cart";
import { useMe } from "../../reducers/me/hooks";

const BooksPage = () => {
  const { books, loading } = useGetBooks();
  const { addOrIncreaseItem } = useCartItemsActions();
  const { me } = useMe()
  const handleAdd = item => me && me.id && addOrIncreaseItem(me.id, item);
  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && (
        <Grid container spacing={1}>
          <Cart />
          {books.map(book => (
            <Book key={book.id} book={book} handleClick={handleAdd} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default BooksPage;
