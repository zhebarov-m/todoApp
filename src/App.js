import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/UI/TodoForm";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const clearTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          clearCompletedTodos={clearCompletedTodosHandler}
          resetTodos={resetTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={clearTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCount && (
        <h4>
          Завершено {completedTodosCount}{" "}
          {completedTodosCount > 1 ? "задачи" : "задача"}
        </h4>
      )}
    </div>
  );
}

export default App;
