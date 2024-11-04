import React from 'react'

export const Footer = () => {
    return (
        <footer className='w-full py-2 footer bg-black ' id='footer'>
        <ul className='sm:flex hidden w-1/2 mx-auto h-10 justify-around items-center text-white'>
          <a href="/" className='border-gray-700 hover:border-b-2 cursor-pointer'>Home</a>
          <a href="#about" className='border-gray-700 hover:border-b-2 cursor-pointer'>About</a>
          <a href="#project" className='border-gray-700 hover:border-b-2 cursor-pointer'>Projects</a>
          <a href="#servces" className='border-gray-700 hover:border-b-2 cursor-pointer'>Services</a>
          <a href="#contact" className='border-gray-700 hover:border-b-2 cursor-pointer'>Contact</a>
          <a href="#footer" className='border-gray-700 hover:border-b-2 cursor-pointer'>Footer</a>
        </ul>
        
        <div className='w-full flex justify-around items-start md:flex-row flex-col text-orange-200 underline ml-0 sm:ml-10'>
          <a href="https://wa.me/212682462168" target="blank">Send WhatsApp Message</a>
          <a href="mailto:habafimarwan@gmail.com">habafimarwan@gmail.com</a>
          <a href='https://www.linkedin.com/in/marwan-hanafi-672119288/'>LinkedIn: hanafimarwan</a>
        </div>
      </footer>
    )
}
