import { useEffect, useState } from "react";

function TodosElement({ title, completedApi }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(completedApi);
  }, [completedApi]);
  return (
    <li className={completed === true ? "strike-through" : ""}>{title}</li>
  );
}

export default TodosElement;
