import UserElement from "../components/UserElement";
import useFetch from "../hooks/useFetch";

function Users() {
  const url = "http://127.0.0.1:3000/users";
  const { data, isLoading, error } = useFetch(url);

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {isLoading && <p>Loading...</p>}
        {error && <div>{error}</div>}
        {data &&
          data.map((user) => (
            <UserElement
              key={user.id}
              name={user.name}
              company={user.company.name}
              website={user.website}
              email={user.email}
              to={`/users/${user.id}`}
            />
          ))}
      </div>
    </div>
  );
}

export default Users;
