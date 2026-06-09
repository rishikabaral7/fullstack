import React from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    let newError = {};

    e.preventDefault();

    if (form.name.trim() === "") {
      newError.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newError.email = "Invalid Email, Email must contain @";
    }
    if (form.password.length < 6) {
      newError.password = "Password must be atleast 6 character";
    }
    setError(newError);
    if (Object.keys(newError).length > 0) {
    return;
  }
    register(form.name, form.email, form.password);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url(/src/assets/task_bg.png)] bg-center bg-no-repeat bg-cover ">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col gap-4  py-10 bg-gray-200 w-100  items-center rounded-2xl shadow-xl/30">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 ">Register</h1>
        <input
          type="name"
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder="Enter Full Name"
          className="bg-gray-400 text-white outline-none px-3 rounded-xl w-75 h-10"
        />
        {error.name && (
          <p className="text-red-500 text-sm -mt-2">{error.name}</p>
        )}
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          className="bg-gray-400 text-white outline-none px-3 rounded-xl w-75 h-10"
        />
        {error.email && (
          <p className="text-red-500 text-sm -mt-2">{error.email}</p>
        )}
        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
          className="bg-gray-400 text-white outline-none px-3 rounded-xl w-75 h-10"
        />
        {error.password && (
          <p className="text-red-500 text-sm -mt-2">{error.password}</p>
        )}
        <button
          type="submit"
          className="bg-gray-800 w-30 h-12 rounded-2xl text-white">
          Register
        </button>
        <div>
          <p className="text-gray-800">
            Already have an account?{" "}
            <span className="text-red-400">
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
