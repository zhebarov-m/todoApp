import {
  RiTodoFill,
  RiDeleteBack2Line,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "../Todos/Todo.module.css";

function Todo({ text, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.task} ${
        text.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <p className={styles.textTodo}>{text.text}</p>
      <RiDeleteBack2Line
        onClick={() => deleteTodo(text.id)}
        className={styles.todoDeleteIcon}
      />
      <FaCheck
        className={styles.todoCheckIcon}
        onClick={() => toggleTodo(text.id)}
      />
    </div>
  );
}

export default Todo;
