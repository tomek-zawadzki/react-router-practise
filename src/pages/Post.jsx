import { Link, useLoaderData } from "react-router-dom";

function Post() {
  const { postsData, commentsData, usersData } = useLoaderData();
  // console.log(editId);
  return (
    <>
      {postsData && (
        <div className="container">
          <h1 className="page-title">
            {postsData.title}
            <div className="title-btns">
              <Link className="btn btn-outline" to={`edit`}>
                Edit
              </Link>
            </div>
          </h1>
          <span className="page-subtitle">
            By:{" "}
            <Link to={`/users/${postsData.userId.toString()}`}>
              {usersData
                .filter((user) => user.id === postsData.userId)
                .map((us) => us.name)}
            </Link>
          </span>
          <div>{postsData.body}</div>
          <h3 className="mt-4 mb-2">Comments</h3>
          <div className="card-stack">
            {commentsData
              .filter((comment) => comment.postId === postsData.id)
              .map((com) => (
                <div className="card" key={com.id}>
                  <div className="card-body">
                    <div className="text-sm mb-1">{com.email}</div>
                    {com.body}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

async function loader({ request: { signal }, params }) {
  const usersData = fetch(`http://127.0.0.1:3000/users/`, {
    signal,
  }).then((res) => res.json());
  const commentsData = fetch(`http://127.0.0.1:3000/comments/`, {
    signal,
  }).then((res) => res.json());
  const postsData = await fetch(
    `http://127.0.0.1:3000/posts/${params.postId}`,
    {
      signal,
    }
  ).then((res) => res.json());
  return {
    postsData,
    commentsData: await commentsData,
    usersData: await usersData,
  };
}
export const postRoute = {
  loader,
  element: <Post />,
};
