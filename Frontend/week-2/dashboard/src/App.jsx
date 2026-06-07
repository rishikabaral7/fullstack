import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
  
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      <aside className="bg-gray-800 text-white p-4 h-full">
        <Sidebar />
      </aside>


<main>

      <Routes>
        <Route path= '/' element={<Dashboard/>}/>
        <Route path= '/users' element={<Users/>}/>
        
      </Routes>
</main>
    </div>
  )
}

export default App
