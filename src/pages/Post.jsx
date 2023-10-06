import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Post() {
  const { postId, userId } = useParams();

  const urlUsers = "http://127.0.0.1:3000/users";
  const { data: usersData, isLoading, error } = useFetch(urlUsers);

  const urlPosts = "http://127.0.0.1:3000/posts";
  const {
    data: postsData,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = useFetch(urlPosts);

  const urlComments = "http://127.0.0.1:3000/comments";
  const {
    data: commentsData,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useFetch(urlComments);

  if (!usersData) return;
  if (!postsData) return;
  if (!commentsData) return;

  const post = postsData.find((post) => post.id === +postId);

  return (
    <>
      {isLoadingPosts && <p>Is Loading</p>}
      {errorPosts && <p>{error}</p>}
      {postsData && (
        <div className="container">
          <h1 className="page-title">{post.title}</h1>
          <span className="page-subtitle">
            By:{" "}
            <Link to={`/users/${post.userId}`}>
              {usersData
                .filter((user) => user.id === post.userId)
                .map((us) => us.name)}
            </Link>
          </span>
          <div>{post.body}</div>
          <h3 className="mt-4 mb-2">Comments</h3>
          <div className="card-stack">
            {isLoadingComments && <p>Is loading ...</p>}
            {errorComments && <p>{error}</p>}
            {commentsData
              .filter((comment) => comment.postId === +postId)
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

export default Post;
