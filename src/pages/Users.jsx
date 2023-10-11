import { useLoaderData } from "react-router-dom";
import UserElement from "../components/UserElement";

function Users() {
  const data = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {data &&
          data.map((user) => (
            <UserElement
              key={user.id}
              name={user.name}
              company={user.company.name}
              website={user.website}
              email={user.email}
              to={`/users/${user.id.toString()}`}
            />
          ))}
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return fetch(`http://127.0.0.1:3000/users/`, {
    signal,
  });
}

export const usersRoute = {
  loader,
  element: <Users />,
};
