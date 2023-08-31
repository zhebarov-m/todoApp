import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const { todos, deleteTodo, toggleTodo } = props;
  return (
    <div className={styles.todoList}>
      {!todos.length && <h4>Todo list is empty</h4>}
      {todos.map((el) => (
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={el.id}
          text={el}
        />
      ))}
    </div>
  );
}

export default TodoList;
