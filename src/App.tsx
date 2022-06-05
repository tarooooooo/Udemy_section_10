import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchDeta = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchDeta}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} />
      ))}
    </div>
  );
}
