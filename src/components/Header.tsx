import React from 'react'
import {Link } from 'react-router-dom'
export const Header = () => {
    const today = new Date();
    return (
        <header className="w-full h-14 bg-orange-700 flex justify-between  items-center px-7 sticky top-0 z-50" id='/'>
            <h1 className="text-2xl font-bolds"><span className='text-white italic'>Ha</span>nafi <span className='text-white italic'>M</span>arouane</h1>
            <nav className='w-1/2 h-full md:flex justify-between items-center hidden'>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a href="#servces">Servces</a>
                <a href="#contact">Contact</a>
                <a href="#footer">Footer</a>
            </nav>
            <Link to={'/user.singUp.'+ today.getFullYear()+'.'+today.getDate()} className='bg-orange-900 font-bold italic text-white border-2 border-blue-700 hover:text-blue-700 hover:bg-white hover:border-orange-900 px-3 xl:py-1  py-2 rounded-lg'>Sing up</Link>
        </header>
    )
}
