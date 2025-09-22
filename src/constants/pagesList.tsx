import type { ReactNode } from "react";
import Home from "../Modules/Home/View/Home.tsx";
import Shop from "../Modules/Shop/View/Shop.tsx";
import CarDetails from "../Modules/Shop/View/CarDetails.tsx";
import Login from "../Modules/Auth/View/Login.tsx";
import Register from "../Modules/Auth/View/Register.tsx";
import Cart from "../Modules/Cart/View/Cart.tsx";
import NotFound from "../Modules/Additionals/View/NotFound.tsx";

export type NavKeys = "home" | "shop" | "car-details" | "login" | "register" | "cart" | "not-found";

interface IPage {
  id: NavKeys;
  title: string;
  path: string;
  element: ReactNode;
  is_visible: boolean;
  for_navigation: boolean;
}

const pagesList: IPage[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    element: <Home />,
    is_visible: true,
    for_navigation: true,
  },
  {
    id: "shop",
    title: "Shop",
    path: "/shop",
    element: <Shop />,
    is_visible: true,
    for_navigation: true,
  },
  {
    id: "car-details",
    title: "Car Details",
    path: "/car-details/:id",
    element: <CarDetails />,
    is_visible: true,
    for_navigation: false,
  },
  {
    id: "login",
    title: "Login",
    path: "/login",
    element: <Login />,
    is_visible: true,
    for_navigation: false,
  },
  {
    id: "register",
    title: "Register",
    path: "/register",
    element: <Register />,
    is_visible: true,
    for_navigation: false,
  },
  {
    id: "cart",
    title: "Cart",
    path: "/cart",
    element: <Cart />,
    is_visible: true,
    for_navigation: false,
  },
  {
    id: "not-found",
    title: "Not Found",
    path: "*",
    element: <NotFound />,
    is_visible: true,
    for_navigation: false,
  },
];

export default pagesList;
