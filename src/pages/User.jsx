import { useParams } from "react-router-dom";
import PostELement from "../components/PostELement";
import TodosElement from "../components/TodosElement";
import useFetch from "../hooks/useFetch";

function User() {
  const { userId } = useParams();

  const urlUsers = "http://127.0.0.1:3000/users";
  const { data: usersData, isLoading, error } = useFetch(urlUsers);

  const urlPosts = "http://127.0.0.1:3000/posts";
  const {
    data: postsData,
    isLoading: isLoadingPosts,
    error: errorPosts,
  } = useFetch(urlPosts);

  const urlTodos = "http://127.0.0.1:3000/todos";
  const {
    data: todosData,
    isLoading: isLoadingTodos,
    error: errorTodos,
  } = useFetch(urlTodos);

  if (!usersData) return;
  const user = usersData.find((us) => us.id === +userId);

  if (!postsData) return;
  if (!todosData) return;

  return (
    <>
      {isLoading && <p>Is Loading</p>}
      {error && <p>{error}</p>}
      {usersData && (
        <div className="container">
          <h1 className="page-title">{user.name}</h1>
          <div className="page-subtitle">{user.email}</div>
          <div>
            <b>Company:</b> {user.company.name}
          </div>
          <div>
            <b>Website:</b> {user.website}
          </div>
          <div>
            <b>Address:</b> {user.address.street} {user.address.suite},{" "}
            {user.address.city}, {user.address.zipcode}
          </div>

          <h3 className="mt-4 mb-2">Posts</h3>
          <div className="card-grid">
            {isLoadingPosts && <p>Is Loading</p>}
            {errorPosts && <p>{error}</p>}
            {postsData
              .filter((post) => post.userId === +userId)
              .map((post) => (
                <PostELement
                  key={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
          </div>

          <h3 className="mt-4 mb-2">Todos</h3>
          <ul>
            {isLoadingTodos && <p>Is Loading</p>}
            {errorTodos && <p>{error}</p>}
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

export default User;
