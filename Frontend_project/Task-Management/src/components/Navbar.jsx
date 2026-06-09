import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const{logout} = useAuth();

  const handleLogout =()=>{
    logout();
    navigate('/')

  }


  return (
    <div className='bg-gray-200 text-black p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Task Management</h1>
      <button className='px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 text-white' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar
