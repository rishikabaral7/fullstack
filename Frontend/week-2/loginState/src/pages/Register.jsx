import React from 'react'
import {useAuth} from '../context/AuthContext'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const Register = () => {
  const {register} = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
  })


  const handleSubmit=(e)=>{
    e.preventDefault();

    register(
      form.name,
      form.email,
      form.password
    );

    navigate('/login')


  }

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }



  return (
    <div className=''>
      
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-120 h-120 bg-gray-300 gap-4 p-4'>
      <h2 className='text-4xl font-bold text-center my-8 text-gray-700'>REGISTER</h2>

        <input type="text" onChange={handleChange} className=' bg-white outline-none rounded-xl w-90 px-3 h-12' name='name' value={form.name} placeholder='Full Name'  />
        <input type="email" onChange={handleChange} className='w-90 bg-white outline-none rounded-xl px-3 h-12' name='email' value={form.email}  placeholder='Enter email'/>
        <input type="password" onChange={handleChange} name='password' value={form.password} className=' w-90 bg-white rounded-xl outline-none px-3 h-12' placeholder='Enter Password'  />
        <button type='submit' className='w-30 h-10 bg-white mt-4 rounded-xl text-gray-700'>Register</button>
                <p>If dont have account <Link to='/login' className="text-red-400">Login</Link></p>

      </form>
    </div>
  )
}

export default Register
