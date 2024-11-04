import React from 'react';
import { Link } from 'react-router-dom';

interface ContentProps {
    title: string;
    para: string;
    url: string;
}

export const Content: React.FC<ContentProps> = ({ title, para, url }) => {
    const handleClick = () => {
        alert('There was an error getting this project.');
    };

    return (
        <div className='border-2 border-blue-800 flex justify-around items-center flex-col lg:w-72 w-3/4 h-96 lg:mx-0 mx-auto lg:h-full'> 
            <h1 className='text-orange-700 text-xl'>{title}</h1>
            <p className='text-center'>{para}</p>
            {url !== '' ? (
                <Link to={url} className='rounded-md shadow-md shadow-black hover:text-blue-600 hover:bg-orange-500 hover:shadow-blue-700 font-bold bg-blue-900 text-white border-2 border-black px-2 py-1'>
                    Download Project
                </Link>
            ) : (
                <button onClick={handleClick} className='rounded-md shadow-md shadow-black hover:text-blue-600 hover:bg-orange-500 hover:shadow-blue-700 font-bold bg-blue-900 text-white border-2 border-black px-2 py-1'>
                    Download Project
                </button>
            )}
            <div>
                <button className='m-3'>0&#128077;</button>         
                <button className='m-3'>0&#128078;</button>    
            </div>         
        </div>
    );
};
