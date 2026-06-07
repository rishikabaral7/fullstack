import React from 'react'
import burger from '../assets/Smoke-Out.png'
const Home = () => {
  return (
    <div className='w-full h-screen bg-gray-200 px-20'>
      <div className='w-full h-[400px] flex justify-center items-center'>
        <div className='w-1/2 h-full flex items-center justify-center'>
          <h2 className='text-5xl font-bold'>Welcome To Home Page</h2>
          
        </div>
        <img className='w-130 h-[330px]' src={burger} alt="" />
      </div>

    </div>
  )
}

export default Home
