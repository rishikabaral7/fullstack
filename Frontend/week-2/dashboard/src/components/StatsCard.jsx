import React from 'react'

const StatsCard = ({ name, value }) => {
  return (
    <div className="bg-gray-200  shadow-md rounded p-4 m-2 w-1/3">
      <h3>{name}</h3>
      <p>{value}</p>
    </div>
  )
}

export default StatsCard
