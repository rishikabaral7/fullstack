import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updatedTask = [...task];

      updatedTask[editIndex] = {
        ...updatedTask[editIndex],
        text: input,
      };
      setTask(updatedTask);
      setEditIndex(null);
    } else {
      setTask([...task, { text: input, completed: false }]);
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setInput(task[index].text);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const deleteTask = task.filter((item, i) => i !== index);
    setTask(deleteTask);
    if (editIndex === index) {
      setEditIndex(null);
      setInput("");
    }
  };
  const handleComplete = (index) => {
    const updatedTask = [...task];

    updatedTask[index].completed = !updatedTask[index].completed;
    setTask(updatedTask);
  };

  const filteredTasks = task.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  return (
    <div className="mx-6 my-10">
      <h2 className="text-center text-6xl font-bold text-red-400">TODO LIST</h2>
      <div className="flex items-center flex-col mt-20 bg-gray-200 scroll-smooth overflow-y-auto scrollbar-none h-screen w-full py-12 ">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-white w-70 h-10 mb-6 px-3 outline-none border-2 border-red-200"
            value={input}
            onChange={handleChange}
            placeholder="Add your task"
          />
          <button type="submit" className="bg-red-300 px-8 py-2 text-white ">
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </form>
        <div>
          <div className="flex gap-3 mt-5">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
          </div>
        </div>

        {filteredTasks.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white w-160 h-12 mt-5 px-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={item.completed}
                onClick={() => handleComplete(index)}
              />
              <p className={item.completed ? "line-through text-gray-400" : ""}>
                {item.text}
              </p>{" "}
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                onClick={() => handleDelete(index)}
                className="bg-red-300 px-3 py-1 rounded-xl text-white">
                Delete
              </button>
              <button
                type="submit"
                onClick={() => handleEdit(index)}
                className="bg-red-300  px-3 py-1 rounded-xl text-white">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
