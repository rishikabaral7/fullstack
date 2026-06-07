import React, { useState } from 'react'

const App = () => {
  const[message, setMessage] = useState("")

const handleSubmit = (e)=>{
  e.preventDefault();
  setMessage("Success")
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="mail" placeholder='Enter Email' /><br/>
        <input type="password" placeholder='Enter Password' /><br/>
        <button type='submit'>Submit</button>

      </form>
      {message}
    </div>
  )
}

export default App