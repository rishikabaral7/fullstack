import React from 'react'
import useFetch from '../hook/UseFetch'
import { useState } from 'react';


const Users = () => {
  const [search, setSearch] = useState('');
  const {data, loading, error} = useFetch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const filterUsers = data?.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));

  

  return (
    <div className='px-5 pb-10'>
      <div className='flex justify-between items-center px-4 mt-12 mb-10'>
<h2 className='text-5xl font-bold text-gray-800 px-4 mt-12 mb-10'>
      All Users Table

</h2>

<input type="search" className='outline-none border-2 border-gray-300 px-3 w-70 h-8 rounded-xl' placeholder="Search users..." onChange={handleSearch} value={search} />
      </div>
      {loading && <p>Loading...</p>}
      {!loading && data &&(
        <table className="min-w-full bg-white border border-gray-400 border-collapse table-fixed">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
          </tr>
        </thead>
          <tbody>
            {!filterUsers.length && (
              <tr>
                <td colSpan="7" className="text-center py-4"> No users found.</td>
              </tr>
            )}
            { 
            
          
          filterUsers?.map((user) => (
            <tr key={user.login.uuid}>
              <td className="border border-gray-300 px-4 py-2">
                {user.name.first}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.location.city}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(user.dob.date).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.gender}
              </td>
              <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  )
}

export default Users