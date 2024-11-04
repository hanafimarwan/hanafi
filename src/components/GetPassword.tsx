import React from 'react'
import { Link } from 'react-router-dom'
export const GetPassword = () => {
    const today = new Date();
    return (
        <div className='w-full h-full  flex justify-center items-center bg'>
            <form  className="md:w-80 w-P2  h-72 px-2 shadow-sm shadow-black  border-2 border-orange-600 rounded-xl mx-auto  inset-0 bg-[#c8a86a38] flex justify-around items-center flex-col pt-6">
                <h1 className='text-xl text-white p-2 f'>Enter your email here!</h1>
            <input className='focus:outline-none border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="text" placeholder='email' />
            <div className=" md:w-4/5 w-P1 h-10 flex justify-between items-center">
                <label htmlFor="robo" className='f'>confirm you are not arobt</label>
                <input className='mt-1 border border-gray-800 rounded-md  p-1' type="checkbox" id='robot'/>
            </div>
            <button className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2' >SendEmail</button>
            <Link to={'/user.logIn.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>LogIn</Link>
            <Link to={'/user.singUp.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>SingUp.</Link>
        </form>
        </div>
    )
}
