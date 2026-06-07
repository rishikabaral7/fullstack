import React from 'react'
import { useState } from 'react'

const App = () => {
  const[list, setList] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setList((prevList) => [...prevList, input])
    setInput("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add list"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default App