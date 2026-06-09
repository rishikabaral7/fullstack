import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { useAuth } from "../context/AuthContext";
import TaskList from "../components/TaskList";
import Box from "../components/Box";
import { useEffect } from "react";
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'

const Homepage = () => {
  // const {todo, addTodo, deleteTodo, userTodo,toogleComplete} = useTodo();
  // const{currentUser} = useAuth();
  // const[todo, setTodo] = useState({
  //   text:'',
  //   desc:'',
  //   priority:'medium',
  //   completed:false,

  // })
  const { userTodo, editTodo, deleteTodo } = useTodo();

  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [mode, setMode] = useState("add");

  const highTasks = userTodo.filter((task) => task.priority === "high");

  const totalTask = userTodo.length;
  const latestTask = [...userTodo].sort((a, b) => b.id - a.id).slice(0, 5);
  const handleEdit = (task) => {
    setEditForm(task);
    setMode("edit");
    setShowForm(true);
  };

  const pendingTask = userTodo.filter(task => !task.completed);

  const countPending = pendingTask.length;

  const handleDelete = (id)=>{
    deleteTodo(id)
  }
const completeTask = userTodo.filter(task => task.completed)
const countComplete = completeTask.length;

  return (
    <div className="bg-gray-200 h-full px-10 pb-15 ">
      <h1 className="text-4xl font-bold mb-5">Dashboard</h1>

      <button
        onClick={() => setShowForm(true)}
        className="bg-gray-700 w-30 h-9 text-white rounded-xl mb-5">
        Add Task
      </button>
      {/* <TaskList
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        mode="simple"
      /> */}

      <div className="flex justify-around  gap-10">
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-gray-700 mb-5">
            Recent Task List
          </h2>

          {latestTask.map((task) => (
            <div
              key={task.id}
              className="flex justify-between p-4 m-2 bg-white rounded font-semibold">
              <h3>{task.text}</h3>
              <div className="flex gap-7">

              <button
                onClick={() => handleEdit(task)}
                className="  text-white rounded-xl">
                <img src={Edit} className="w-6" />
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="  text-white rounded-xl">
                <img src={Delete} className="w-6" />
              </button>
                  </div>
        </div>
          ))}
          <TaskList
            isOpen={showForm}
            onClose={() => {
              setShowForm(false);
              setEditForm(null);
              setMode("add");
            }}
            mode={mode}
            editData={editForm}
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-gray-700 mb-5">
            High Priority Task
          </h2>

          {highTasks.length === 0 ? (
            <p>No high priority task</p>
          ) : (
            highTasks
              .sort((a, b) => b.id - a.id)
              .slice(0, 5)
              .map((task) => (
                <div key={task.id}>
                  <h3 className="font-semibold p-4 m-2 bg-white rounded">
                    {task.text}
                  </h3>
                </div>
              ))
          )}
        </div>
      </div>

      <div className="flex justify-around mt-10">
        <div>
          <Box title="Total Task" value={totalTask} />
        </div>
        <div>
          <Box title="Pending Task" value={countPending} />
        </div>
        <div>
          <Box title="Complete Task" value={countComplete} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
