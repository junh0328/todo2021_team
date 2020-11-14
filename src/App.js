import Todoinsert from "./components/Todoinsert";
import TodoList from "./components/TodoList";
import Todotemplate from "./components/Todotemplate";

function App() {
  return (
    <div>
      <Todotemplate>
        <Todoinsert />
        <TodoList />
      </Todotemplate>
    </div>
  );
}

export default App;
