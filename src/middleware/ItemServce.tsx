import React from 'react'
interface ItemProps {
    imgs: string;
    para: string;
    flex:boolean;
}
export const ItemServce:React.FC<ItemProps>  = ({imgs,para,flex}) => {
    return (
        <div className=" sm:w-full  sm:h-P h-60 bg-gray-700  mb-2 p-1 rounded-md flex justify-normal items-center mx-auto">
            {flex?(
                <>
                    <img src={imgs} alt="images for a mobile application!" className="w-40 h-full  ml-3 " />
                    <div className='w-3/4 h-full overflow-y-auto overflow-x-hidden hide'>
                        <p className='px-1 text-blue-200 f text-center'>{para}</p>
                    </div>
                </>
            ):(
                <>
                    <div className='w-3/4 h-full overflow-y-auto overflow-x-hidden hide '>
                        <p className='px-1 text-blue-200 f text-center'>{para}</p>
                    </div>
                    <img src={imgs} alt="images for a mobile application!" className="w-40 h-full  ml-3" />
                </>
            )}
            
       </div>
    )
}
