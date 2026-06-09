import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Layout = () => {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
        <Sidebar />
        <div className='flex flex-col h-full'>
            <Navbar/>
            <div className='flex-1 overflow-y-auto'>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout