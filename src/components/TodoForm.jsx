import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 flex-wrap items-center justify-center gap-2 w-full max-w-2xl mx-auto bg-orange-100   dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-4 space-x-2">
      <input
        type="text"
        className="flex-1 px-2 py-2 border rounded-md outline-none"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
