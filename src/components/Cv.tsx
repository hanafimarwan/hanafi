import React,{ useState } from 'react'
import { FaDownload } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { BsFilePdf } from "react-icons/bs";
import { setFunctionB, setFunctionS } from '../api/Sing';
import { Link } from 'react-router-dom';

export const Cv = () => {
    const [ok, setOk]:[boolean,setFunctionB] = useState(false);
    const [isLog, setIsLog]:[boolean,setFunctionB] = useState(false);
    const [test, setTest]:[string,setFunctionS] = useState('');
    const today=new Date();

    const close=():void=>{
        setOk(false);
        setIsLog(false);
    }
    const handelClick=()=>{
        const user=localStorage.getItem("user");
        setOk(true)
        if(user===null){
            setIsLog(false);
            setTest('you must to login first')
        }
        else {
            setIsLog(true);
            setTest('You Can download it from here!');
        }
    }
    return (
        <div className='w-full h-full'>

            <div className="w-full h-60 flex justify-center items-center">
                <button onClick={handelClick} className="px-6 py-2 rounded border-2 border-blue-700 bg-green-700 flex justify-around text-white font-bold italic f  items-center"><FaDownload/> Download</button>
            </div>
            {ok&&<div className="absolute top-1/3 md:w-80 w-P2  h-60 px-2 shadow-xl z-50 shadow-gray-400   rounded-xl mx-auto  inset-0 bg-white flex justify-around items-center flex-col pt-6 border-gray-800 border-2">
                <IoWarning className='text-[70px] text-red-600'/>
                
                <div className=" flex w-full justify-around items-center">
                    <BsFilePdf className='text-lime-800 text-5xl mr-10'/>
                    <p className="f text-2xl italic  text-center">{test}</p>
                </div>
                <div className=" flex w-full justify-around items-center">
                    {!isLog?(<Link to={'/user.logIn.' + today.getFullYear() + '.' + today.getDate()} onClick={close} className=' text-violet-500 hover:underline text-xl'>Login</Link>):
                    (<a href='/cv.pdf' className=' text-violet-500 hover:underline text-xl'> Download</a>)}
                    <button onClick={close} className=' text-violet-500 hover:underline text-xl'>close</button>
                </div>  
            </div>}
        </div>
    )
}
