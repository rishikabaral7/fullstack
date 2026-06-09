import React from 'react'
import Task from '../assets/icons8-next-100.png'

const Box = ({title,value}) => {
  return (
    <div className='bg-gray-700 w-70 h-40 flex flex-col px-10 py-5 gap-1 text-white'>
        <div className='text-xl font-semibold flex justify-between gap-10'>

        {title}
            <img src={Task} className='w-7' alt="" />
        </div >
        <div className='text-6xl font-bold'>


        {value}
        </div>
    </div>
  )
}

export default Box