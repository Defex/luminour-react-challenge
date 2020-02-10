import React from 'react';
import { useHistory, useParams } from 'react-router';
import { pages } from '../routes';
import {
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  CircularProgress,
} from '@material-ui/core';
import { useOrderActions, useGetOrdersByUserId } from '../reducers/orders/hooks';
import { Item } from '../reducers/cart/types';
import { getAllowedOrdersStatusChanges } from '../reducers/helpers';
import { useMe } from '../reducers/me/hooks';
import { orderStatuses } from '../reducers/orders/types';
import BookDrawer from '../components/BookDrawer';
import { useAllowAdmin } from '../reducers/users/hooks';

const OrderPage = () => {
  useAllowAdmin();
  const { push } = useHistory();
  const { orderId, userId } = useParams();
  const { orders, loading } = useGetOrdersByUserId(userId || '');
  const { updateOrder } = useOrderActions();
  const { me } = useMe();

  const handleGoBack = () => push(pages['/users/:userId/orders'].href(userId));

  const order = orders.find(o => o.id === orderId);
  const allowedStatuses: any =
    (me && me.role && order && getAllowedOrdersStatusChanges(me.role, order.status)) || false;
  const handleAddItem = (item: Item) => () => {
    if (order) {
      const exists = order && order.items.find(({ id }) => id === item.id);
      if (!!exists) {
        const _item = { ...exists, quantity: exists.quantity + 1 };
        const _items = order.items.map(it => (it.id === exists.id ? _item : it));
        return updateOrder({ ...order, items: _items });
      }
      return updateOrder({
        ...order,
        items: [...order.items, { ...item, quantity: 1 }],
      });
    }
  };
  const handleRemoveItem = (item: Item) => () => {
    if (order) {
      const exists = order && order.items.find(({ id }) => id === item.id);
      if (!!exists && exists.quantity > 1) {
        const _item = { ...exists, quantity: exists.quantity - 1 };
        const _items = order.items.map(it => (it.id === exists.id ? _item : it));
        return updateOrder({ ...order, items: _items });
      }
      return updateOrder({
        ...order,
        items: order.items.filter(({ id }) => id !== item.id),
      });
    }
  };
  const handleRemove = (item: Item) => () => {
    if (order) {
      return updateOrder({
        ...order,
        items: order.items.filter(({ id }) => id !== item.id),
      });
    }
  };

  const handleConfirmClick = () => order && updateOrder({ ...order, status: orderStatuses.paid });
  const handleCancelClick = () => order && updateOrder({ ...order, status: orderStatuses.canceled });
  const handleSentClick = () => order && updateOrder({ ...order, status: orderStatuses.sent });

  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && order && (
        <div>
          <Button onClick={handleGoBack}>Go Back</Button>

          <div>
            <span>Order id:</span>
            <span>{order.id}</span>
          </div>

          <div>
            <span>Order status:</span>
            <span>{order.status}</span>
          </div>
          {order.status === orderStatuses.new && <BookDrawer handleAddToCartClick={handleAddItem} />}
          <div>
            <div>Order Items</div>
            <List>
              {order.items.map(item => (
                <ListItem key={`${item.id}`} divider>
                  <ListItemAvatar>
                    <Avatar alt={item.title} src={item.book_cover} variant="square" />
                  </ListItemAvatar>
                  <ListItemText primary={item.title} />
                  <ListItemText secondary={item.author} />
                  <ListItemText secondary={item.published_date} />
                  <div>
                    {order.status === orderStatuses.new && <Button onClick={handleRemoveItem(item)}>{`<`}</Button>}
                    <span>{`Quantity: ${item.quantity}`}</span>
                    {order.status === orderStatuses.new && <Button onClick={handleAddItem(item)}>{`>`}</Button>}
                  </div>
                  <div>
                    {order.status === orderStatuses.new && <Button onClick={handleRemove(item)}>Remove</Button>}
                  </div>
                </ListItem>
              ))}
            </List>

            {allowedStatuses && (
              <Grid container justify="flex-end">
                {allowedStatuses[orderStatuses.canceled] && (
                  <Button onClick={handleCancelClick} color="secondary">
                    Cancel Order
                  </Button>
                )}
                {allowedStatuses[orderStatuses.sent] && (
                  <Button onClick={handleSentClick} color="primary">
                    set sent status
                  </Button>
                )}
                {allowedStatuses[orderStatuses.paid] && (
                  <Button onClick={handleConfirmClick} color="primary">
                    Confirm Order
                  </Button>
                )}
              </Grid>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
