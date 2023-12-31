const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="center">
      <p>
        {todo.text + " "}
        <span onClick={() => deleteTodo(todo.text)} className="delete">
          Delete
        </span>
      </p>
    </div>
  );
};

export default Todo;
