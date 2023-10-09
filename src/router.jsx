import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./NavLayout";
import ErrorPage from "./pages/ErrorPage";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/posts", element: <Posts /> },
      { path: "/posts/:postId", element: <Post /> },
      { path: "/todos", element: <Todos /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:userId", element: <User /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
