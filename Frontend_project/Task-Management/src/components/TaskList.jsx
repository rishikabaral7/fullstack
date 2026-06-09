import React, { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";

const TaskList = ({ isOpen, onClose, mode, editData }) => {
  const { addTodo, editTodo, userTodo } = useTodo();

  const [todo, setTodo] = useState({
    text: "",
    description: "",
    priority: "medium",
    progress: "pending",
    startDate: "",
    endDate: "",
  });
const[error, setError] = useState({});
  useEffect(() => {
    if (mode === "edit" && editData) {
      setTodo({
        text: editData.text || "",
        description: editData.description || "",
        priority: editData.priority || "medium",
        progress: editData.progress || "pending",
        startDate: editData.startDate || "",
        endDate: editData.endDate || "",
      });
    } else {
      setTodo({
        text: "",
        description: "",
        priority: "medium",
        progress: "pending",
        startDate: "",
        endDate: "",
      });
    }
  }, [mode, editData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if(todo.text.trim()===""){
      newError.text = "Task must not be empty"
    }
    if(todo.description.trim()===""){
      newError.description = "Task must not be empty"
    }
    setError(newError);

    if(Object.keys(newError).length >0){
      return;
    }


    if (mode === "edit" && editData) {
      editTodo(
        editData.id,
        todo.text,
        todo.description,
        todo.priority,
        todo.progress,
        todo.startDate,
        todo.endDate,
      );
    } else {
      addTodo(
        todo.text,
        todo.description,
        todo.priority,
        todo.progress,
        todo.startDate,
        todo.endDate,
      );
    }
    setTodo({
      text: "",
      description: "",
      priority: "medium",
      progress: "pending",
      startDate: "",
      endDate: "",
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-150 h-135 rounded-2xl  gap-3 justify-center items-left px-10 bg-gray-700 py-6">
        <h2 className="text-4xl font-bold mb-3 text-center text-white">
          Add Task
        </h2>
        <input
          name="text"
          value={todo.text}
          onChange={handleChange}
          placeholder="Task name"
          className="bg-white w-130 h-10 rounded-xl px-4 py-3 outline-none"
        />
 {error.text && (
              <p className="text-red-500 text-sm -mt-2">{error.text}</p>
            )}
        <textarea
          name="description"
          value={todo.description}
          onChange={handleChange}
          placeholder="Description"
          className="bg-white w-130 py-2 h-25 rounded-xl px-4 outline-none"
        />
         {error.description && (
              <p className="text-red-500 text-sm -mt-2">{error.description}</p>
            )}
        <div className="flex justify-between mt-6">
          <label htmlFor="priority" className="text-white text-xl font-medium">
            Priority
            <select
              name="priority"
              value={todo.priority}
              onChange={handleChange}
              className="bg-gray-700 text-white text-sm  px-3 py-2 outline-none rounded-lg">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
          <label htmlFor="Progress" className="text-white text-xl font-medium">
            Progress
            <select
              name="progress"
              value={todo.progress}
              onChange={handleChange}
              className="bg-gray-700 text-white text-sm  px-3 py-2 outline-none rounded-lg">
              <option value="pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>
        </div>
        <div className="flex justify-between mt-6">
          <label htmlFor="startDate" className="text-white font-medium text-xl">
            Start Date: {""}
            <input
              type="date"
              name="startDate"
              className="bg-white text-sm py-1 px-3 rounded outline-none text-black"
              value={todo.startDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="endDate" className="text-white font-medium text-xl">
            End Date: {""}
            <input
              type="date"
              name="endDate"
              className="bg-white text-sm py-1 px-3 rounded outline-none text-black"
              value={todo.endDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex gap-5 justify-center mt-6">
          <button type="submit" className="w-20 h-8 bg-gray-300 rounded-xl">
            {mode === "edit" ? "update" : "Add"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-20 h-8 bg-gray-300 rounded-xl">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskList;
