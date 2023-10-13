import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
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
              {
                path: "new",
                element: <NewPostForm />,
                action: async ({ request }) => {
                  const formData = await request.formData();
                  const title = formData.get("title");
                  const userId = Number(formData.get("userId"));
                  const body = formData.get("body");

                  console.log(title);
                  console.log(userId);
                  console.log(body);

                  const post = await fetch(`http://127.0.0.1:3000/posts/`, {
                    method: "POST",
                    signal: request.signal,
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userId, title, body }),
                  }).then((res) => res.json());

                  return redirect("/");
                },
              },
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
