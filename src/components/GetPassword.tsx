import React from 'react'
import { Link } from 'react-router-dom'
import { handleSubmitPassword, setFunctionB, setFunctionS,handleChangePassword } from '../api/Sing';
import { useState } from 'react';
import { sleep } from '../hook/function';
import {FaUserLock } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
export const GetPassword = () => {
    const today = new Date();
    const [email,setEmail]:[string,setFunctionS]=useState('');
    const [password,setPassword]:[string,setFunctionS]=useState('');
    const [CPassword,setCPassword]:[string,setFunctionS]=useState('');
    const [er,setEr]:[string,setFunctionS]=useState('');
    const [loading, setLoading]:[boolean,setFunctionB] = useState(false);
    const [ok,setOk]:[boolean,setFunctionB]=useState(false);
    const [ok2,setOk2]:[boolean,setFunctionB]=useState(false);
    const [nb,setNb]=useState(0);
    const [code,setCode]=useState('');
    
    const handlePassword=async(e:React.FormEvent):Promise<void>=>{
            e.preventDefault();
            setLoading(true);
            const res=await handleSubmitPassword(e,email);
            if(res===-1){
                setEr("the email is not exist!");
            }
            else if(res===0){
                setEr("error to send email!")
            }
            else{
                setNb(res);
                setEr("");
            }
            
            await sleep(100);
            setLoading(false);
    }
    const handleCode=async(e:React.FormEvent)=>{
        e.preventDefault();
        if(nb===parseInt(code)) {
            setOk(true);
            setEr("");
        }
        else {
            setOk(false);
            setEr("this is a wrong code!");
        }
    }
    const handleChange=async(e:React.FormEvent)=>{
        e.preventDefault();
        if(password!==CPassword){
            setEr("Passwords do not match.")
        }else{
            setLoading(true);
            const res=await handleChangePassword(e,email,password);
            if(res!==1) setEr("Password change failed due to a security error.");
            else{
                await sleep(1000);
                setLoading(false);
                setEr("");
                setOk2(true);
            }
        }
    }
    const close=():void=>{
        setOk2(false);
    }
    return (
        <div className='w-full h-full  flex justify-center items-center bg'>
            {loading && <div className="w-full h-full   flex justify-center items-center absolute top-0 left-0">
                        <h1 className="text-4xl w-56 h-56 flex justify-center items-center rounded-full inset-0 bg-[#212e3f87] spinner">Loading...</h1>    
            </div>}
            {!ok?nb===0?(
                <form  className="md:w-80 w-P2  h-72 px-2 shadow-sm shadow-black  border-2 border-orange-600 rounded-xl mx-auto  inset-0 bg-[#c8a86a38] flex justify-around items-center flex-col pt-6" onSubmit={handlePassword}>
                    <h1 className='text-xl text-white p-2 f'>Enter your email here!</h1>
                    <input className='focus:outline-none border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="email" placeholder='email' required value={email} onChange={e=>setEmail(e.target.value)} />
                    <div className=" md:w-4/5 w-P1 h-10 flex justify-between items-center">
                        <label htmlFor="robo" className='f'>confirm you are not arobt</label>
                        <input className='mt-1 border border-gray-800 rounded-md  p-1' type="checkbox" id='robot' required/>
                    </div>
                    {er && <p className="text-red-500 text-center p-2">{er}</p>} {/* Show error message if any */}
                    <button className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2' >SendEmail</button>
                    <Link to={'/user.logIn.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>LogIn</Link>
                    <Link to={'/user.singUp.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>SingUp.</Link>
                </form>
            ):(
                <form  className="md:w-80 w-P2  h-72 px-2 shadow-sm shadow-black  border-2 border-orange-600 rounded-xl mx-auto  inset-0 bg-[#c8a86a38] flex justify-around items-center flex-col pt-6" onSubmit={handleCode}>
                    <h1 className='text-xl text-white p-2 f text-center'> We are sending you the code via email {email}</h1>
                    <input className='focus:outline-none border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="text" placeholder='entre the code here!' required value={code} onChange={e=>setCode(e.target.value)} />
                    <div className=" md:w-4/5 w-P1 h-10 flex justify-between items-center">
                        <label htmlFor="robo" className='f'>confirm you are not arobt</label>
                        <input className='mt-1 border border-gray-800 rounded-md  p-1' type="checkbox" id='robot' required/>
                    </div>
                    {er && <p className="text-red-500 text-center p-2">{er}</p>} {/* Show error message if any */}
                    <button className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2' >Ok</button>
                    {/* <Link to={'/user.logIn.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>LogIn</Link> */}
                    {/* <Link to={'/user.singUp.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>SingUp.</Link> */}
                </form>
                ):(
                    <form  className="md:w-80 w-P2  h-72 px-2 shadow-sm shadow-black  border-2 border-orange-600 rounded-xl mx-auto  inset-0 bg-[#c8a86a38] flex justify-around items-center flex-col pt-6" onSubmit={handleChange}>
                        <h1 className='text-xl text-white p-2 f'>Enter your new Password!</h1>
                        <input className='focus:outline-none border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="password" placeholder='Password' required value={password} onChange={e=>setPassword(e.target.value)} />
                        <input className='focus:outline-none border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="password" placeholder='Confirm Password' required value={CPassword} onChange={e=>setCPassword(e.target.value)} />
                        <div className=" md:w-4/5 w-P1 h-10 flex justify-between items-center">
                            <label htmlFor="robo" className='f'>confirm you are not arobt</label>
                            <input className='mt-1 border border-gray-800 rounded-md  p-1' type="checkbox" id='robot' required/>
                        </div>
                        {er && <p className="text-red-500 text-center p-2">{er}</p>} {/* Show error message if any */}
                        <button className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2' >Ok</button>
                    </form>
                )}
                {ok2&&<div className="absolute top-1/3 md:w-80 w-P2  h-60 px-2 shadow-xl z-50 shadow-gray-400   rounded-xl mx-auto  inset-0 bg-white flex justify-around items-center flex-col pt-6 border-gray-800 border-2">
                <FaCircleInfo className='text-[70px] text-green-600'/>
                <div className=" flex w-full justify-around items-center">
                    <FaUserLock  className='text-lime-800 text-5xl mr-10'/>
                    <p className="f text-2xl italic  text-center">User updated successfully.</p>
                </div>
                <div className=" flex w-full justify-around items-center">
                   <Link to={'/user.logIn.' + today.getFullYear() + '.' + today.getDate()} onClick={close} className=' text-violet-500 hover:underline text-xl'>Login</Link>
                    <button onClick={close} className=' text-violet-500 hover:underline text-xl'>close</button>
                </div>  
            </div>}
        </div>
    )
}
