import React, { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ThemeSwitcher from "./components/Themeswitcher";

function App() {
  const [todos, setTodos] = useState([]);

  //  Ye Use effect starting me chlega 
  // mtlb ki jb app load hoga to agr pehle se koi data hoga local storage me to wo use state me set krke UI me dikhaya ja ke
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  //  ye UseEffect  chlega jb bhi koi nya todo add ho ya dlt ho ya koi bhi change s ho
  // localStorage.setItem(key, value); type 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      timestamp: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newText) => {
    if (!newText.trim()) return;

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const getElapsedTime = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) => [...prevTodos]); // Just triggers a re-render
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo, getElapsedTime }}>
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700 dark:text-white p-4">
    <ThemeSwitcher/>
    <h1 className="text-2xl font-bold mb-4">Todo App</h1>
    
    <TodoForm />
    <TodoList />
  </div>
</TodoProvider>  );
}

export default App;
