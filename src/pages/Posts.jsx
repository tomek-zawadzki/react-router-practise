import { useLoaderData } from "react-router-dom";
import PostELement from "../components/PostELement";
import NewPostForm from "./NewPostForm";

function Posts() {
  const data = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {data &&
          data.map((post) => (
            <PostELement
              key={post.id}
              title={post.title}
              body={post.body}
              to={`/posts/${post.id.toString()}`}
            />
          ))}
      </div>
    </div>
  );
}
function loader({ request: { signal } }) {
  return fetch(`http://127.0.0.1:3000/posts/`, {
    signal,
  });
}

export const postsRoute = {
  loader,
  element: <Posts />,
};
