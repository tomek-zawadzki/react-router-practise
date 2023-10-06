import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLayout from "./NavLayout";
import PageNotFound from "./pages/PageNotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import User from "./pages/User";
import Users from "./pages/Users";
import "./styles.css";

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Post /> },
      { path: "/posts", element: <Posts /> },
      { path: "/posts/:postId", element: <Post /> },
      { path: "/todos", element: <Todos /> },
      { path: "/post", element: <Post /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:userId", element: <User /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
