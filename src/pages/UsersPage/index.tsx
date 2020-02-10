import React from "react";
import { useGetUsers, useAllowAdmin } from "../../reducers/users/hooks";
import {
  Table,
  CircularProgress,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@material-ui/core";
import { useHistory } from "react-router";
import { pages } from "../../routes";

const UsersPage = () => {
  useAllowAdmin()
  const { users, loading } = useGetUsers();
  const { push } = useHistory();

  const handleViewOrderClick = (userId: string) => () =>
    push(pages["/users/:userId/orders"].href(userId));
  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>surname</TableCell>
              <TableCell>role</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={handleViewOrderClick(user.id)}>
                    View Orders
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default UsersPage;
