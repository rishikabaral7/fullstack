import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(
      email,
      password
    );

    if (success) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-120 h-120 bg-gray-300 gap-4 p-4'>
            <h2 className='text-4xl font-bold text-center my-8 text-gray-700'>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        className=' bg-white outline-none rounded-xl w-90 px-3 h-12' 
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        className=' bg-white outline-none rounded-xl w-90 px-3 h-12' 
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button className='w-30 h-10 bg-white mt-4 rounded-xl text-gray-700' type="submit">
        Login
      </button>
      <div>
        <p>If dont have account <Link to='/register' className="text-red-400">Register</Link></p>
      </div>
    </form>
  );
}

export default Login;