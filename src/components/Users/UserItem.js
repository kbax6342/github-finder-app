import React from 'react'

const UserItem = ({user}) => {
  return (
    <div className='border flex-col w-[300px] p-5 mb-5'>
    
     
      <img className='rounded-full h-[100px] mx-auto' src={user.avatar_url}></img>
      <h2>Name: {user.login}</h2>
      <button className='bg-black text-white px-4'>
        More
      </button>
    </div>
  )
}

export default UserItem
