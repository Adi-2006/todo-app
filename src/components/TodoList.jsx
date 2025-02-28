import React from "react";
import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return <p className="text-center dark:text-gray-300">No todos available. Add a new task!</p>;
  }

  return (
    <ul className="w-full max-w-2xl mx-auto bg-sky-200  shadow-lg rounded-lg p-4 space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
