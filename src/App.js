import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import "./App.css";
import Todos from "./Todos";

const storageName = "todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    const data = JSON.parse(localStorage.getItem(storageName));
    setTodos(data || []);
  };
  const addTodo = (text) => {
    setTodos((prev) => {
      const todos = [{ text }, ...prev];
      localStorage.setItem(storageName, JSON.stringify(todos));
      return todos;
    });
  };
  const deleteTodo = (text) => {
    setTodos((prev) => {
      const todos = prev.filter((todo) => todo.text !== text);
      localStorage.setItem(storageName, JSON.stringify(todos));
      return todos;
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App center">
      <AddTodoForm addTodo={addTodo} />
      <br />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
