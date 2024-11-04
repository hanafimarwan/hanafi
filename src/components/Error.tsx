import React from 'react'
import { Link } from 'react-router-dom'
export const Error = () => {
    return (
        <div className='bg-orange-100 w-full h-full'>
            <div className="w-full h-60 flex justify-center items-center flex-col">
                <p className="text-2xl font-bold f text-blue-950">Sory whis is wrong</p>
                <Link to={"/"} className='underline text-violet-500 text-lg '>Go To Home Page</Link>
            </div>
        </div>
    )
}
