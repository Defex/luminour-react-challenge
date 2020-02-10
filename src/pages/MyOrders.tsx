import React from 'react';
import { useGetMyOrders, useOrderActions } from '../reducers/orders/hooks';
import {
  CircularProgress,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Button,
  Backdrop,
} from '@material-ui/core';
import { orderStatuses, Order } from '../reducers/orders/types';
import { useHistory } from 'react-router';
import { pages } from '../routes';

const MyOrders = () => {
  const { orders, loading, hasLoaded } = useGetMyOrders();
  const { confirmOrder, cancelOrder } = useOrderActions();
  const { push } = useHistory();

  const handleConfirmOrderClick = (order: Order) => () => confirmOrder(order);
  const handleCancelOrderClick = (order: Order) => () => cancelOrder(order);
  const handleEditAndViewClick = (order: Order) => () => push(pages['/my-orders/:orderId'].href(order.id));
  return (
    <div>
      {loading && !hasLoaded && <CircularProgress />}
      {loading && hasLoaded && (
        <Backdrop open={!!loading}>
          <CircularProgress />
        </Backdrop>
      )}
      {!loading && (
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>status</TableCell>
                <TableCell>actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(o => (
                <TableRow key={o.id}>
                  <TableCell>{o.id}</TableCell>
                  <TableCell>{o.status}</TableCell>
                  <TableCell>
                    {o.status === orderStatuses.new && <Button onClick={handleConfirmOrderClick(o)}>Confirm</Button>}
                    {o.status === orderStatuses.new && <Button onClick={handleCancelOrderClick(o)}>Cancel</Button>}
                    {o.status === orderStatuses.new && <Button onClick={handleEditAndViewClick(o)}>Edit</Button>}
                    {o.status !== orderStatuses.new && <Button onClick={handleEditAndViewClick(o)}>View</Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
