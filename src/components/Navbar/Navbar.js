import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='bg-red-400 w-100 flex text-left text-white font-medium py-3 pl-4'>
    <h1 className='flex'>
     <AiFillGithub className='flex mr-2 self-center'/> Navbar
    </h1>
     
    </nav>
  )
}

export default Navbar
