import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [sortBy, setSortBy] = useState("latest")
  const [mode, setMode] = useState("add");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const { userTodo, toggleComplete, deleteTodo } = useTodo();

  const sortedTasks = [...userTodo].sort((a, b) => {
    if(sortBy ==="latest"){
      return b.id - a.id
    }
    if(sortBy === "oldest"){
      return a.id - b.id;
    }
    if(sortBy === "priority"){
      const order = {high:3, medium:2, low:1}
      return order[b.priority] - order[a.priority];
    }

    if(sortBy === "progress"){
      const order = {done:3, "In Progress:":2, pending:1}
      return order[b.progress] - order[a.progress];
    }
    return 0;

  });
  const totalPages = Math.ceil(sortedTasks.length/tasksPerPage);

  const recentTask = sortedTasks.slice((currentPage -1 )*tasksPerPage, currentPage * tasksPerPage);

  const handleDelete = (id) => {
    deleteTodo(id);
      setCurrentPage(1);

  };
  const handleEdit = (task) => {
    setEditForm(task);
    setMode("edit");
    setShowForm(true);
  };

  return (
    <div className="bg-gray-200 h-full px-10 pb-15 ">
      <div className="flex justify-between">

      <h1 className="text-4xl font-bold mb-5">All Tasks</h1>
      <div className="mb-4 flex gap-3 items-center">
        <label className="font-bold">Sort By:</label>
        <select className="px-3 py-2 outline-none border-none" value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="priority">Priority</option>
          <option value="progress">Progress</option>
        </select>
      </div>
      </div>
      <table className="min-w-full bg-white border border-gray-400 border-collapse table-fixed">
        <thead>
          <tr className="bg-gray-700 text-white uppercase text-sm leading-normal">
            <th className="border border-gray-300 px-4 py-2">Done</th>
            <th className="border border-gray-300 px-4 py-2">Task</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Priority</th>
            <th className="border border-gray-300 px-4 py-2">Progress</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">Due Date</th>
            <th className="border border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {recentTask &&
            recentTask.map((task) => (
              <tr key={task.id} className="p-4 bg-white rounded font-semibold">
                <td className="border border-gray-300 px-3 text-center py-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                  />
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {task.text}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.description}
                </td>
                <td className="border border-gray-300 px-6 py-2">
                  <span
                    className={
                      "px-3 py-1 rounded-full text-sm font-medium " +
                      (task.priority === "high"
                        ? "bg-red-200 text-red-800"
                        : task.priority === "medium"
                          ? "bg-yellow-200 text-yellow-800"
                          : task.priority === "low"
                            ? "bg-green-200 text-green-800"
                            : "")
                    }>
                    {task.priority}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={
                      "px-3 py-1 rounded-full text-sm font-medium " +
                      (task.progress === "In Progress"
                        ? "bg-blue-200 text-blue-950"
                        : task.progress === "pending"
                          ? "bg-orange-200 text-orange-800"
                          : task.progress === "done"
                            ? "bg-green-300 text-green-900"
                            : "")
                    }>
                    {task.progress}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.startDate
                    ? new Date(task.startDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {task.endDate
                    ? new Date(task.endDate).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className=" ">
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleEdit(task)}
                      className="  text-white rounded-xl">
                      <img src={Edit} className="w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="  text-white rounded-xl">
                      <img src={Delete} className="w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <TaskList
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditForm(null);
          setMode("add");
        }}
        mode={mode}
        editData={editForm}
      />{" "}
<div className="flex justify-center gap-2 mt-4">
  <button
    onClick={() => setCurrentPage((p) => p - 1)}
    disabled={currentPage === 1}
    className="px-3 py-1 border-none text-white rounded bg-gray-700"
  >
    Prev
  </button>

  <span className="px-3 py-1">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((p) => p + 1)}
    disabled={currentPage === totalPages}
    className="px-3 py-1 border-none text-white rounded bg-gray-700"
  >
    Next
  </button>
</div>

    </div>
  );
};

export default TaskPage;
