import Button from "../UI/Button";
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
import styles from "./TodosActions.module.css";

function TodosActions({
  resetTodos,
  clearCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button onClick={resetTodos} title="Reset todos">
        <RiRefreshLine className={styles.resetTodosIcon} />
      </Button>
      <Button
        disabled={!completedTodosExist}
        onClick={clearCompletedTodos}
        title="Clear completed todos"
      >
        <RiDeleteBin2Line className={styles.deleteCompletedTodosIcon } />
      </Button>
    </div>
  );
}

export default TodosActions;
