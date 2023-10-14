import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import NavLayout from "./NavLayout";
import ErrorPage from "./pages/ErrorPage";
import { postRoute } from "./pages/Post";
import { postsRoute } from "./pages/Posts";
imgiport { todosRoute } from "./pages/Todos";
import { usersRoute } from "./pages/Users";
import { userRoute } from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import NewPostForm from "./pages/NewPostForm";
import EditPostForm from "./pages/EditPostForm";

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
              {
                path: ":postId",
                children: [
                  { index: true, ...postRoute },
                  {
                    path: "edit",
                    element: <EditPostForm />,
                    loader: async ({ request: { signal }, params }) => {
                      const postData = await fetch(
                        `http://127.0.0.1:3000/posts/${params.postId}`,
                        {
                          signal,
                        }
                      ).then((res) => res.json());

                      return { postData: await postData };
                    },
                    action: async ({ request, params }) => {
                      const formData = await request.formData();
                      const title = formData.get("title");
                      const userId = Number(formData.get("userId"));
                      const body = formData.get("body");

                      const updatePost = await fetch(
                        `http://127.0.0.1:3000/posts/${params.postId}`,
                        {
                          method: "PUT",
                          signal: request.signal,
                          headers: {
                            "Content-type": "application/json",
                          },
                          body: JSON.stringify({ title, userId, body }),
                        }
                      ).then((res) => res.json());

                      return redirect(`/posts/${updatePost.id}`);
                    },
                  },
                ],
              },
              {
                path: "new",
                element: <NewPostForm />,
                action: async ({ request }) => {
                  const formData = await request.formData();
                  const title = formData.get("title");
                  const userId = Number(formData.get("userId"));
                  const body = formData.get("body");

                  const post = await fetch(`http://127.0.0.1:3000/posts/`, {
                    method: "POST",
                    signal: request.signal,
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userId, title, body }),
                  }).then((res) => res.json());

                  return redirect(`/posts/${post.id}`);
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
