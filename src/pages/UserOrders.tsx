import React from 'react';
import { useGetOrdersByUserId, useOrderActions } from '../reducers/orders/hooks';
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
import { useHistory, useParams } from 'react-router';
import { pages } from '../routes';
import { useAllowAdmin } from '../reducers/users/hooks';

const UserOrders = () => {
  useAllowAdmin();
  const { userId } = useParams();
  const { orders, loading, hasLoaded } = useGetOrdersByUserId(userId || '');
  const { confirmOrder, cancelOrder } = useOrderActions();
  const { push } = useHistory();

  const handleConfirmOrderClick = (order: Order) => () => confirmOrder(order);
  const handleCancelOrderClick = (order: Order) => () => cancelOrder(order);
  const handleEditAndViewClick = (order: Order) => () =>
    push(pages['/users/:userId/orders/:orderId'].href(userId, order.id));
  const handleGoBackClick = () => push('/users');
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
          <Button onClick={handleGoBackClick}>← Go Back</Button>
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

export default UserOrders;
