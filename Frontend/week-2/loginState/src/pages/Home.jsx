import React from 'react'
import {useAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    logout();
    Navigate('/login')
  }
  return (
    <div className='flex flex-col '>
      {currentUser?.name}
      <button className='bg-red-300 w-30 h-8' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
