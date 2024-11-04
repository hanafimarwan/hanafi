import React from 'react'
import { User } from '../api/get';
import { handleDownload ,handleDownloadCsv} from '../hook/function';
interface ItemProps{
    data:User[];
}
export const Data:React.FC<ItemProps>= ({data}) => {
    return (
        <div>
            <div className='w-full min-h-60 flex justify-around items-center sm:flex-row flex-col'>
                <button className='text-violet-700 bg-orange-400 border-violet-900 italic text-2xl py-2 px-4 rounded-md border-2 hover:bg-white hover:text-orange-500 hover:border-violet-900' onClick={()=>handleDownload(data)}>download XML file</button>
                <button className='text-violet-700 bg-orange-400 border-violet-900 italic text-2xl py-2 px-4 rounded-md border-2 hover:bg-white hover:text-orange-500 hover:border-violet-900' onClick={()=>handleDownloadCsv(data)}>download CSV file</button>
            </div>
            {data.map(d=>(
                <p>{d.id},{d.email},{d.password},{d.date}</p>
            ))}
        </div>
    )
}
