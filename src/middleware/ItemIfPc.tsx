import React from 'react'
import { Link } from 'react-router-dom';
import { setUrl } from '../hook/function';
interface ItemProps {
    th: string;
    title: string;
    para: string;
    url: string;
}
export const ItemIfPc: React.FC<ItemProps> = ({ th, title, para, url }) => {
    return (
        <div className=' w-full h-full flex justify-around items-center flex-col'>
            <h2 className="">{title}</h2>
            <h2 className="text-center">{para}</h2>
            <Link to={"/github.ping"} onClick={() => setUrl(url)} className=' bg-orange-300 p-2 border border-white font-bold italic  text-white hover:bg-white hover:text-blue-700 hover:border-orange-300'>Download</Link>        
        </div>
    )
}
