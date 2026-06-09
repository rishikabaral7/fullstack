import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const { currentUser } = useAuth();
  const [todo, setTodo] = useState(() => {
    const getTodo = localStorage.getItem("todo");
    return getTodo ? JSON.parse(getTodo) : [];
  });

  const addTodo = (
    text,
    description,
    priority,
    progress,
    startDate,
    endDate,
  ) => {
    if (!currentUser) return;

    const newTodo = {
      id: Date.now(),
      text,
      description,
      priority,
      progress,
      completed: false,
      startDate,
      endDate,
      userId: currentUser.id,
    };

    const updateTodo = [...todo, newTodo];
    setTodo(updateTodo);

    localStorage.setItem("todo", JSON.stringify(updateTodo));
  };
  
  const editTodo =(id, text, description, priority, progress, startDate, endDate)=>{
    const updateTodo = todo.map((t)=>
    t.id === id?{...t, text, description, priority, progress,startDate, endDate }:t
  );
  setTodo(updateTodo);
  localStorage.setItem('todo',JSON.stringify(updateTodo))
  }

  const deleteTodo = (id) => {
    const deleteTask = todo.filter((t) => t.id !== id);
    setTodo(deleteTask);

    localStorage.removeItem("todo", JSON.stringify(deleteTask));
  };

  const toggleComplete = (id) => {
    const updateTodo = todo.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
            progress: !todo.completed ? "done" : "pending",
          }
        : todo,
    );

    setTodo(updateTodo);
    localStorage.setItem("todo", JSON.stringify(updateTodo));
  };

  const userTodo = currentUser
    ? todo.filter((t) => t.userId === currentUser.id)
    : [];

  return (
    <TodoContext.Provider
      value={{ todo, addTodo, deleteTodo, editTodo, userTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
