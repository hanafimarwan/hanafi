import React,{useState} from 'react'
import { getUrl} from '../hook/function';
import { VscGithub } from "react-icons/vsc";
import { setFunctionB, setFunctionS } from '../api/Sing';
import { IoWarning } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaCircleInfo } from "react-icons/fa6";
export const Downoad = () => {
    const url:string|null=getUrl();
    let urlFixe:string='';
    if(url===null) {urlFixe='';}
    else{urlFixe=url;}

    const handelClick=():void=>{
        alert("Sory ther is error for get GitHub Page !")
    }




    const [ok, setOk]:[boolean,setFunctionB] = useState(false);
    const [isLog, setIsLog]:[boolean,setFunctionB] = useState(false);
    const [test, setTest]:[string,setFunctionS] = useState('');
    const today=new Date();
    const close=():void=>{
        setOk(false);
        setIsLog(false);
    }
    const click=():void=>{
        const user=localStorage.getItem("user");
        setOk(true)
        if(user===null){
            setIsLog(false);
            setTest('you must to login first')
        }
        else {
            setIsLog(true);
            setTest('Go To my Page in GitHub !');
        }
    }
    return (
        <div className='w-full h-full bg-black'>
            <div className='w-full h-96 flex justify-around items-center flex-col'>
                {/* <img src="/img/gitHub.png" alt="gitHub images" className='w-60 h-60' /> */}
                <VscGithub className='w-60 h-60 text-white'/>
                <button onClick={click} className='p-2 bg-white shadow-white shadow-md text-xl font-bold rounded hover:bg-gray-400 hover:text-gray-100'>Link for the GitHub</button>
            </div>
            {ok&&<div className="absolute top-1/3 md:w-80 w-P2  h-60 px-2 shadow-xl z-50 shadow-gray-400   rounded-xl mx-auto  inset-0 bg-white flex justify-around items-center flex-col pt-6 border-gray-800 border-2">
                {isLog?(<FaCircleInfo className='text-[70px] text-green-600'/>):(<IoWarning className='text-[70px] text-red-600'/>)}
                
                <div className=" flex w-full justify-around items-center">
                    <FaGithubSquare className='text-lime-800 text-5xl mr-10'/>
                    <p className="f text-2xl italic  text-center">{test}</p>
                </div>
                <div className=" flex w-full justify-around items-center">
                    {!isLog?(<Link to={'/user.logIn.' + today.getFullYear() + '.' + today.getDate()} onClick={close} className=' text-violet-500 hover:underline text-xl'>Login</Link>):
                    urlFixe!==''?(<a href={urlFixe} className=' text-violet-500 hover:underline text-xl' >GitHub</a>)
                    :(<button onClick={handelClick} className='p-2 bg-white shadow-white shadow-md text-xl font-bold rounded hover:bg-gray-400 hover:text-gray-100'>GitHub</button>)}
                    <button onClick={close} className=' text-violet-500 hover:underline text-xl'>close</button>
                </div>  
            </div>}
        </div>
    )
}
