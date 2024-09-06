import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import Root from "./components/Root/Root.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import Users from "./components/Users/Users.jsx";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-espresso-store.onrender.com/coffee"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () =>
          fetch("https://coffee-espresso-store.onrender.com/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-espresso-store.onrender.com/coffee/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://coffee-espresso-store.onrender.com/user"),
      },
      {
        path: "coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-espresso-store.onrender.com/coffee/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
