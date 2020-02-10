import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import { useGetBooks } from "../reducers/books/hooks";
import { Book } from "../reducers/books/types";

const BookDrawer = ({
  handleAddToCartClick
}: {
  handleAddToCartClick: Function;
}) => {
  const [open, setOpen] = useState(false);
  const { books } = useGetBooks(true);
  const addToCart = (book: Book) => () => handleAddToCartClick(book)();
  const handleOpenClick = () => setOpen(true);
  const handleCloseClick = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpenClick} variant="contained">Add Item</Button>
      <Drawer open={open} onClose={handleCloseClick}>
        <List>
          {books.map(item => (
            <ListItem key={`${item.id}`} divider>
              <ListItemAvatar>
                <Avatar
                  alt={item.title}
                  src={item.book_cover}
                  variant="square"
                />
              </ListItemAvatar>
              <ListItemText primary={item.title} />
              <ListItemText secondary={item.author} />
              <ListItemText secondary={item.published_date} />
              <div>
                <Button onClick={addToCart(item)}>Add To Cart</Button>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default BookDrawer
