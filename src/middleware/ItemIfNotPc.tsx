import React from 'react'
import { Link } from 'react-router-dom';
import { setUrl } from '../hook/function';
interface ItemProps {
    th: string;
    title: string;
    para: string;
    url: string;
}
export const ItemIfNotPc: React.FC<ItemProps> = ({ th, title, para, url }) => {
    return (
        <div className='bg-gray-400 border-blue-500 border-2 lg:w-60 md:w-48 w-4/5 h-64   md:my-0 my-4 flex justify-around items-center flex-col cursor-help'>
            <h2 className=" text-xl text-bold italic text-white text-center">{title}</h2>
            <h2 className="text-center md:h-1/2">{para}</h2>
            <Link to={"/github.ping"}  onClick={() => setUrl(url)} className=' bg-orange-300 p-2 border border-white font-bold italic  text-white hover:bg-white hover:text-blue-700 hover:border-orange-300'>Download</Link>
        </div>
    )
}
