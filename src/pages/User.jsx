import { useLoaderData, useParams } from "react-router-dom";
import PostELement from "../components/PostELement";
import TodosElement from "../components/TodosElement";

function User() {
  const { userId } = useParams();

  const { usersData, postsData, todosData } = useLoaderData();

  return (
    <>
      {usersData && (
        <div className="container">
          <h1 className="page-title">{usersData.name}</h1>
          <div className="page-subtitle">{usersData.email}</div>
          <div>
            <b>Company:</b> {usersData.company.name}
          </div>
          <div>
            <b>Website:</b> {usersData.website}
          </div>
          <div>
            <b>Address:</b> {usersData.address.street} {usersData.address.suite}
            , {usersData.address.city}, {usersData.address.zipcode}
          </div>

          <h3 className="mt-4 mb-2">Posts</h3>
          <div className="card-grid">
            {postsData
              .filter((post) => post.userId === +userId)
              .map((post) => (
                <PostELement
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  to={`/posts/${post.id}`}
                />
              ))}
          </div>

          <h3 className="mt-4 mb-2">Todos</h3>
          <ul>
            {todosData
              .filter((todo) => todo.userId === +userId)
              .map((todo) => (
                <TodosElement
                  key={todo.id}
                  completedApi={todo.completed}
                  title={todo.title}
                />
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

async function loader({ request: { signal }, params }) {
  const usersData = fetch(`http://127.0.0.1:3000/users/${params.userId}`, {
    signal,
  }).then((res) => res.json());
  const todosData = fetch(`http://127.0.0.1:3000/todos/`, {
    signal,
  }).then((res) => res.json());
  const postsData = fetch(`http://127.0.0.1:3000/posts/`, {
    signal,
  }).then((res) => res.json());
  return {
    postsData: await postsData,
    todosData: await todosData,
    usersData: await usersData,
  };
}

export const userRoute = {
  loader,
  element: <User />,
};
