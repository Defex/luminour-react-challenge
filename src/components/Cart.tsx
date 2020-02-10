import React, { useState } from "react";
import { useCartItems, useCartItemsActions } from "../reducers/cart/hooks";
import { useMe } from "../reducers/me/hooks";
import {
  Grid,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  CircularProgress
} from "@material-ui/core";
import { Item } from "../reducers/cart/types";
import { useOrderActions, useOrders } from "../reducers/orders/hooks";

const Cart = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { me } = useMe();
  const { items } = useCartItems((me && me.id) || "");
  const {
    addOrIncreaseItem,
    removeOrDecreaseItem,
    removeItem
  } = useCartItemsActions();
  const { loading } = useOrders();

  const { createOrder } = useOrderActions();

  const total = items.reduce((sum, { quantity }) => (sum += quantity), 0);

  const handleOpenDrawer = () => total > 0 && setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleAddItem = (item: Item) => () =>
    me && me.id && addOrIncreaseItem(me.id, item);
  const handleRemoveItem = (item: Item) => () =>
    me && me.id && removeOrDecreaseItem(me.id, item);
  const handleRemove = (item: Item) => () =>
    me && me.id && removeItem(me.id, item);
  const handleCreateOrderClick = () => {
    if (me) {
      setOpenDrawer(false);
      return createOrder(me, items);
    }
  };

  if (!me) {
    return null;
  }
  return (
    <Grid container justify="flex-end">
      {loading && <CircularProgress />}
      <Button
        disabled={!!loading || items.length === 0}
        onClick={handleOpenDrawer}
      >{`Cart: ${total}`}</Button>
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <Grid container>
          <List>
            {items.map(item => (
              <ListItem key={`${item.id}`} divider>
                <ListItemAvatar>
                  <Avatar
                    alt={item.title}
                    src={item.book_cover}
                    variant="square"
                  />
                </ListItemAvatar>
                <ListItemText primary={item.title} />
                <div>
                  <Button onClick={handleRemoveItem(item)}>{`<`}</Button>
                  <span>{`Quantity: ${item.quantity}`}</span>
                  <Button onClick={handleAddItem(item)}>{`>`}</Button>
                </div>
                <div>
                  <Button onClick={handleRemove(item)}>Remove</Button>
                </div>
              </ListItem>
            ))}
          </List>
        </Grid>

        {items.length > 0 && (
          <Grid container justify="center">
            <Button
              onClick={handleCreateOrderClick}
              variant="contained"
              fullWidth={false}
            >
              Create Order
            </Button>
          </Grid>
        )}
      </Drawer>
    </Grid>
  );
};

export default Cart;
