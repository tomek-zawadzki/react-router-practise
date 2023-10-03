import TodosElement from "../components/TodosElement";
import useFetch from "../hooks/useFetch";

function Todos() {
  const url = "http://127.0.0.1:3000/todos";
  const { data, isLoading, error } = useFetch(url);
  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <div>{error}</div>}
        {data &&
          data.map((todo) => (
            <TodosElement
              key={todo.id}
              title={todo.title}
              completedApi={todo.completed}
            />
          ))}
      </ul>
    </div>
  );
}

export default Todos;
