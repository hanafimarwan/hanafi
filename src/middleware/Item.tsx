import React, { useState } from 'react';
import { hasCursor } from '../hook/function';
import { ItemIfPc } from './ItemIfPc';
import { ItemIfNotPc } from './ItemIfNotPc';
interface ItemProps {
    th: string;
    title: string;
    para: string;
    url: string;
}

export const Item: React.FC<ItemProps> = ({ th, title, para, url }) => {



    const [isHovered, setIsHovered] = useState(false);
    const hascursor=hasCursor();

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);



    return (
        hascursor?(
                    <div className='bg-gray-400 rounded border-blue-950 border-2 xl:w-72 w-60 h-60 xl:h-48 sm:block hidden cursor-pointer'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {
                            !isHovered?(
                                <img src={th} alt=" " className='w-full h-full' />
                            ):(
                                <ItemIfPc th={th} title={title} para={para} url={url}/>
                            )
                        }
                    </div>
                ):(
                    // {/* if pc  if labtob  or mobile */}
                    <ItemIfNotPc th={th} title={title} para={para} url={url} />
                )
    );
};
