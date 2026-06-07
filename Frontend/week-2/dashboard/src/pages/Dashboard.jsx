import React from 'react'
import useFetch from '../hook/UseFetch'
import StatsCard from '../components/StatsCard';
import UserTable from '../components/UserTable';

const Dashboard = () => {
  const {data, loading, error} = useFetch();
    const activeUsers = data?.filter((user, index) => index % 2 === 0);



  return (
    <div>
      <h2 className='text-5xl font-bold text-gray-800 px-4 mt-12'>Dashboard</h2>
     {loading && <p>Loading...</p>}
    {!loading && data &&(


        <div className='px-4'>
        <div className='flex justify-center px-4 py-10'>
          
            <StatsCard name="Total Users" value={data?.length || 0} />

            <StatsCard name="Total Active Users" value={activeUsers.length} />
          
          </div>
          <div>
<h2 className='text-2xl font-bold mb-4 text-gray-800'>Total Active Users</h2>
         <UserTable users={data} />
          </div>
        </div>
      
    )}
    </div>
  )
}

export default Dashboard
