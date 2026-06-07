import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-col space-y-4 h-full">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  )
}

export default Sidebar
