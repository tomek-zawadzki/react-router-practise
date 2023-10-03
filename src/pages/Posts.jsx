import PostELement from "../components/PostELement";
import useFetch from "../hooks/useFetch";

function Posts() {
  const url = "http://127.0.0.1:3000/posts";
  const { data, isLoading, error } = useFetch(url);

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {isLoading && <p>Loading...</p>}
        {error && <div>{error}</div>}
        {data &&
          data.map((post) => (
            <PostELement key={post.id} title={post.title} body={post.body} />
          ))}
      </div>
    </div>
  );
}

export default Posts;
