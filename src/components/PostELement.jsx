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
