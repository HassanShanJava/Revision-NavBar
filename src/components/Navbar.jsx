import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

    const [nav,setNav]=useState(false);
    const handleChange=()=>setNav(!nav);

  return (
    <div className='w-full h-[80px] bg-gray-500 flex justify-between items-center px-4'>
        <div className='py-4'>
            <h1 className='text-3xl md:text-4xl font-bold '>Nav.</h1>
        </div>
        <ul className='hidden md:flex text-2xl '>
            <li className='mx-2 border-black hover:border-b-2 overflow-hidden hover:transition duration-100'>Home</li>
            <li className='mx-2 border-black hover:border-b-2 overflow-hidden hover:transition duration-100'>About</li>
            <li className='mx-2 border-black hover:border-b-2 overflow-hidden hover:transition duration-100'>Work</li>
            <li className='mx-2 border-black hover:border-b-2 overflow-hidden hover:transition duration-100'>Contact</li>
        </ul>

        <div onClick={handleChange} className='sm:hidden z-10'>
            {nav ? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
        </div>

            <ul className={nav?'absolute w-full bg-gray-500 h-screen top-0 left-0 duration-300 flex flex-col justify-center items-center':"absolute w-full bg-gray-500 h-screen top-0 left-[-100%] duration-300 "}>
                <li className='py-6 text-4xl cursor-pointer hover:border-b-2 overflow-hidden border-black'>Home</li>
                <li className='py-6 text-4xl cursor-pointer hover:border-b-2 overflow-hidden border-black'>About</li>
                <li className='py-6 text-4xl cursor-pointer hover:border-b-2 overflow-hidden border-black'>Work</li>
                <li className='py-6 text-4xl cursor-pointer hover:border-b-2 overflow-hidden border-black'>Contact</li>
            </ul>


    </div>
  )
}

export default Navbar