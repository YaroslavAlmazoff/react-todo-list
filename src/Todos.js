import Todo from "./Todo";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <>
      <p>{todos.length ? "Your tasks" : "Your list is empty"}</p>
      {todos.map((todo) => (
        <Todo todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todos;
