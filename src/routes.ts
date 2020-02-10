import { UserRoles } from "./reducers/users/types";

export interface pages {
  [path: string]: {
    name: string;
    roles: string[];
    href: Function;
    noNav?: boolean;
  };
}

export const pages: pages = {
  "/": {
    name: "Books",
    roles: [UserRoles.admin, UserRoles.client],
    href: () => "/"
  },
  "/book-list": {
    name: "Book List",
    roles: [UserRoles.admin],
    href: () => "/book-list"
  },
  "/my-orders": {
    name: "My Orders",
    roles: [UserRoles.client],
    href: () => "/my-orders"
  },
  "/my-orders/:orderId": {
    name: "My Orders",
    roles: [UserRoles.client],
    noNav: true,
    href: (orderId: string) => `/my-orders/${orderId}`
  },
  "/users": {
    name: "User List",
    roles: [UserRoles.admin],
    href: () => "/users"
  },
  "/users/:userId/orders": {
    name: "My Orders",
    roles: [UserRoles.admin, UserRoles.client],
    noNav: true,
    href: (userId: string) => `/users/${userId}/orders`
  },
  "/users/:userId/orders/:orderId": {
    name: "My Orders",
    roles: [UserRoles.admin, UserRoles.client],
    noNav: true,
    href: (userId: string, orderId: string) =>
      `/users/${userId}/orders/${orderId}`
  },
  "/logout": {
    name: "Logout",
    roles: [UserRoles.admin, UserRoles.client],
    href: () => "/logout"
  }
};
