import React ,{useState}from 'react'
import { setFunctionS,setFunctionB } from '../api/Sing'
import { handleSubmit } from '../api/Email';
import { CgMail } from "react-icons/cg";
import { IoWarning } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { sleep } from '../hook/function';

export const Connect = () => {
    const [recipient, setRecipient]:[string,setFunctionS] = useState('');
    const [subject, setSubject]:[string,setFunctionS] = useState('');
    const [test, setTest]:[string,setFunctionS] = useState('');
    const [message, setMessage]:[string,setFunctionS] = useState('');
    const [result, setResult]:[boolean,setFunctionB] = useState(false);
    const [isSend, setIsSend]:[boolean,setFunctionB] = useState(false);
    const [loading, setLoading]:[boolean,setFunctionB] = useState(false);

    const handelClick=async(e: React.FormEvent):Promise<void>=>{
        const user=localStorage.getItem("user");
        if(user===null){
            setTest("you must to login first!");
            setResult(true);
            setIsSend(false);
        }else{
            setLoading(true)
            const rst:string=await handleSubmit(e,recipient,subject,message)
            setTest(rst);
            setResult(true);
            if(rst==='Email sent successfully!') setIsSend(true);
            else setIsSend(false);
            await sleep(1000);
            setLoading(false);
        }
    }
    const close=():void=>{
        setResult(false);
        setTest('');
        setIsSend(false);
    }
    const today = new Date();
    return (
        <div className='w-full min-h-96  '>
            {loading && <div className="w-full h-full   flex justify-center items-center absolute top-0 left-0">
            <h1 className="text-4xl w-56 h-56 flex justify-center items-center rounded-full inset-0 bg-[#212e3f87] spinner">Sending...</h1>    
        </div>}
            <h1 id='contact' className='text-center text-2xl  text-orange-700 italic underline'>Send Email to Me</h1>
            <form action="" className="md:w-3/5 w-P1  min-h-60  border-2 border-orange-600 rounded-xl mx-auto   mt-10 bg-orange-50 flex justify-around items-center flex-col pt-6" onSubmit={handelClick}>
                <input className='border border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="text" placeholder='To' value={recipient} onChange={e=>setRecipient(e.target.value)} />
                <input className='mt-1 border border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="text" placeholder='Subject' value={subject} onChange={e=>setSubject(e.target.value)} />
                <textarea className='mt-1 border border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-32' name="" id="" placeholder='Message' value={message} onChange={e=>setMessage(e.target.value)} ></textarea>
                <button className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2'>Send</button>
            </form>
            {result&&<div className="absolute top-1/3 md:w-80 w-P2  h-60 px-2 shadow-xl z-50 shadow-gray-400   rounded-xl mx-auto  inset-0 bg-white flex justify-around items-center flex-col pt-6 border-gray-800 border-2">
                {isSend?(<FaCircleInfo className='text-[70px] text-green-600'/>):(<IoWarning className='text-[70px] text-red-600'/>)}
                
                <div className=" flex w-full justify-around items-center">
                    <CgMail className='text-orange-800 text-5xl mr-10'/>
                    <p className="f text-2xl italic ">{test}</p>
                </div>
                <div className=" flex w-full justify-around items-center">
                    {!isSend&&<Link to={'/user.logIn.' + today.getFullYear() + '.' + today.getDate()} onClick={close} className=' text-violet-500 hover:underline text-xl'>Login</Link>}
                    <button onClick={close} className=' text-violet-500 hover:underline text-xl'>close</button>
                </div>  
            </div>}
        </div>
    )
}