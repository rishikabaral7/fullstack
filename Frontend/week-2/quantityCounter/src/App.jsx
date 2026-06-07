  import React, { useState } from 'react'
  import Chicken from './assets/Chicken Club.jpeg' 

  const App = () => {
    const[counter, setCounter] = useState(0);
    return (
      <div className='flex flex-col gap-20 justify-center items-center h-screen bg-red-400 '>
        <h1 className='text-white text-6xl font-bold'>Product Quantity Counter</h1>
        <div className='w-90 flex bg-white justify-center items-center flex-col h-80  '>

        <img className='w-80' src={Chicken} alt="" />
        <div className='flex justify-center mt-5 gap-3'>
          <button className='px-4 py-1 bg-red-400 text-white' onClick={()=> setCounter(counter + 1)}>
            +
          </button>
          <h1  className='text-red-400 py-1'>

  {counter}
          </h1>
          <button className='px-4 py-1  bg-red-400 text-white' onClick={()=> setCounter(counter-1)}>
            -
          </button>
        </div>
        </div>
      </div>
    )
  }

  export default App
