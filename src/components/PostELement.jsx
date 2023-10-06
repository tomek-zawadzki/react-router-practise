import { Link } from "react-router-dom";

function PostELement({ title, body, to }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={to}>
          View
        </Link>
      </div>
    </div>
  );
}

export default PostELement;
