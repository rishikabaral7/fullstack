import React from 'react'
import Register from './pages/Register';
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>

      
    </div>
  )
}

export default App
