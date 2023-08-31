import { useState } from "react";
import stylesForm from "../UI/TodoForm.module.css";
import Button from "./Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHundler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form className={stylesForm.form} onSubmit={onSubmitHundler}>
      <input
        placeholder="Enter new todo"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button title="Submit" type="sumbit">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
