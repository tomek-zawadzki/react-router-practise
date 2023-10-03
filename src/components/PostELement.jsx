function PostELement({ title, body }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <a className="btn" href="post.html">
          View
        </a>
      </div>
    </div>
  );
}

export default PostELement;

{
  /* <div className="card">
<div className="card-header">
  sunt aut facere repellat provident occaecati excepturi optio
  reprehenderit
</div>
<div className="card-body">
  <div className="card-preview-text">
    quia et suscipit suscipit recusandae consequuntur expedita et cum
    reprehenderit molestiae ut ut quas totam nostrum rerum est autem
    sunt rem eveniet architecto
  </div>
</div>
<div className="card-footer">
  <a className="btn" href="post.html">
    View
  </a>
</div>
</div> */
}
