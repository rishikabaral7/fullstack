  import React from 'react'
  import { NavLink } from 'react-router-dom'

  const Sidebar = () => {
    return (
      <div className='bg-gray-700 text-white p-4 h-full'>
        <h2 className='text-xl font-bold mb-6'>Menu</h2>
        <aside className='space-y-2 flex flex-col gap-2 font-bold text-xl'>
        <NavLink className={({isActive})=>isActive?'text-white':'text-gray-400 '} to='/dashboard/home'>Dashboard</NavLink>
        <NavLink className={({isActive})=>isActive?'text-white':'text-gray-400'} to='/dashboard/tasks'>All Tasks</NavLink>
        </aside>
      </div>
    )
  }

  export default Sidebar