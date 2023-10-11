import { useLoaderData } from "react-router-dom";

import TodosElement from "../components/TodosElement";

function Todos() {
  const data = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
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

function loader({ request: { signal } }) {
  return fetch(`http://127.0.0.1:3000/todos/`, {
    signal,
  });
}

export const todosRoute = {
  loader,
  element: <Todos />,
};
