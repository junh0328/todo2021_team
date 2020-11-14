import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "밥 잘 먹기",
      checked: true,
    },
    {
      id: 2,
      text: "운동하기",
      checked: false,
    },
    {
      id: 3,
      text: "복습하기",
      checked: false,
    },
  ]);

  const onInsert = () => {};

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
