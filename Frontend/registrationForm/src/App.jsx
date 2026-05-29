import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (formData.name.trim() === "") {
      newError.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      newError.email = "Invalid Email";
    }
    if (formData.password.length < 6) {
      newError.password = "Password must be atleast 6 character";
    }
    if (!formData.password === formData.currentPassword) {
      newError.currentPassword = "Password do not match";
    }
    setError(newError);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    alert("Form Submitted");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
      <div className="bg-white w-110 h-110 px-5 py-8">
        <h2 className="mb-7 text-center text-4xl text-blue-300 font-bold">
          Form Registration
        </h2>
        <div>
          <form
            action="submit"
            onSubmit={handleSubmit}
            className={
              error
                ? "flex flex-col gap-3"
                : "flex flex-col gap-7 justify-center items-center"
            }>
            <input
              placeholder="Enter Name" name="name"
              className="outline-none px-2 border-2 rounded border-blue-300 w-100 h-10"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {error.name && (
              <p className="text-red-500 text-sm -mt-2">{error.name}</p>
            )}
            <input
              placeholder="Enter Email" name="email"
              className="outline-none px-2 border-2 rounded border-blue-300 w-100 h-10"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && (
              <p className="text-red-500 text-sm -mt-2">{error.email}</p>
            )}
            <input
              placeholder="Enter Password" name="password"
              className="outline-none px-2 border-2 rounded border-blue-300 w-100 h-10"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error.password && (
              <p className="text-red-500 text-sm -mt-2">{error.password}</p>
            )}
            <input
              placeholder="Confirm Password" name="confirmPassword"
              className="outline-none px-2 border-2 rounded border-blue-300 w-100 h-10"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {error.confirmPassword && (
              <p className="text-red-500 text-sm -mt-2">
                {error.confirmPassword}
              </p>
            )}{" "}
            <input
              type="submit"
              className={
                
             
                   "w-20 bg-blue-300 py-2 rounded-xl text-white font-semibold"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
