import React from "react";
import Login from "./page/Login";
import Register from "./page/Register";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./page/Homepage";
import Layout from "./components/Layout";
import TaskPage from "./page/TaskPage";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/taskList' element={<TaskList/>}/>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="tasks" element={<TaskPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
