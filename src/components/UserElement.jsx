import { Link } from "react-router-dom";
function UserElement({ name, company, website, email, to, id }) {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div>{company}</div>
        <div>{website}</div>
        <div>{email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={to}>
          View
        </Link>
      </div>
    </div>
  );
}

export default UserElement;
