import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    if(!email.includes("@") && login.email !== email){
      newError.email = "Invalid Email"
    }
    // if(!password === login.password){
    //   newError.password = "Wrong Password"
    // }
    if(password.length<6){
      newError.password = "Password must be atleast 6 character";
    }
    setError(newError);

if (Object.keys(newError).length > 0) {
  return;
}

    const success = login(email, password);

    if (success) {
      navigate("/dashboard/home");
    } 
    else{
        newError.password = "Invalid email or password";

    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url(/src/assets/task_bg.png)] bg-center bg-no-repeat bg-cover ">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col gap-4  bg-gray-200 w-100 py-10 items-center rounded-2xl shadow-xl/30">
        <h1 className="text-4xl font-bold text-gray-800 mb-5 ">Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-400 text-white outline-none px-3 rounded-xl w-75 h-10"
        />
        {error.email && ( <p className="text-red-400 text-sm font-semibold -mt-2">{error.email}</p>)}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-400 text-white outline-none px-3 rounded-xl w-75 h-10"
        />
         {error.password && (
              <p className="text-red-500 text-sm -mt-2">{error.password}</p>
            )}
        <button
          className="bg-gray-800 w-30 h-10 rounded-2xl  text-white"
          type="submit">
          Login
        </button>
        <div>
          <p className="text-gray-800">
            Don't have an account?{" "}
            <span>
              <Link className="text-red-400" to="/register">
                Register
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
