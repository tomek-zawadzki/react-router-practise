function UserElement({ name, company, website, email }) {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div>{company}</div>
        <div>{website}</div>
        <div>{email}</div>
      </div>
      <div className="card-footer">
        <a className="btn" href="user.html">
          View
        </a>
      </div>
    </div>
  );
}

export default UserElement;
