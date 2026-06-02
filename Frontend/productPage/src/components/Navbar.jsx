import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex gap-15 p-4 bg-gray-200 justify-center '>

      <NavLink className={({isActive})=> isActive ? 'text-red-300': 'text-gray-700'} to="/">Home</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-red-300': 'text-gray-700'} to="/contact">Contact</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-red-300': 'text-gray-700'} to="/product">Products</NavLink>
      <NavLink className={({isActive})=> isActive ? 'text-red-300': 'text-gray-700'} to="/about">About</NavLink>
      </div>
    </div>
  )
}

export default Navbar
