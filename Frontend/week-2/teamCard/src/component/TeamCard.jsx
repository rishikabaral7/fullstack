import React from 'react'

const TeamCard = ({name, Age, Role, image, Number, Email}) => {
  return (
    <div>
      <div className='bg-red-300 h-[400px] w-80 flex flex-col justify-center items-center gap-10 rounded-2xl '>
        <div className=''>

        <img className='w-40 h-40 object-cover'  src={image} alt="" />
        </div>
       <div className=''>

        <h2 className='text-2xl font-black text-white -mt-6 text-center'><span className=''>{name}</span> </h2>
        <p className='text-white text-sm font-semibold text-center mb-4'>{Role}</p>
        <p className='text-white text-[16px] font-bold'>Age: {Age}</p>
        <p className='text-white text-[16px] font-bold'>Phone no: {Number}</p>
        <p className='text-white text-[16px] font-bold'>Email: {Email}</p>
        </div>
        
      </div>
    </div>
  )
}

export default TeamCard
