import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const processTodo = () => {
    value && addTodo(value);
    setValue("");
  };
  return (
    <>
      <p>Create Task</p>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && processTodo()}
          placeholder="Task name"
          className="form-item"
        />
        <button onClick={processTodo} className="form-item">
          Add New Task
        </button>
      </div>
      <p>Or press Enter on keyboard</p>
    </>
  );
};

export default AddTodoForm;
