import { Navigate, createBrowserRouter } from "react-router-dom";
import NavLayout from "./NavLayout";
import ErrorPage from "./pages/ErrorPage";
import { postRoute } from "./pages/Post";
import { postsRoute } from "./pages/Posts";
import { todosRoute } from "./pages/Todos";
import { usersRoute } from "./pages/Users";
import { userRoute } from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import NewPostForm from "./pages/NewPostForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postsRoute,
              },
              { path: ":postId", ...postRoute },
              { path: "new", element: <NewPostForm /> },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...usersRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todos", ...todosRoute },
          { path: "*", element: <PageNotFound /> },
        ],
      },
    ],
  },
]);
