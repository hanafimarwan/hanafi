import React,{useState} from 'react'
import { Link} from 'react-router-dom'
import {  setFunctionB, setFunctionS} from '../api/Sing';
interface ItemProps{
    handleSubmit:any;
    loading :boolean
}
export const LogInForm:React.FC<ItemProps>  = ({handleSubmit,loading }) => {
    const today = new Date();
    const [email,setEmail]:[string,setFunctionS]=useState('');
    const [password,setPassword]:[string,setFunctionS]=useState('');
    const [error,setError]:[string,setFunctionS]=useState('');
    const [isChecked, setIsChecked]:[boolean,setFunctionB] = useState(false);
    return (
        <>
            <div className='w-full h-full  flex justify-center items-center bg flex-col'>
                {loading && <div className="w-full h-full   flex justify-center items-center absolute top-0 left-0">
                        <h1 className="text-4xl w-56 h-56 flex justify-center items-center rounded-full inset-0 bg-[#212e3f87] spinner">Loading...</h1>    
                </div>}
                <form  className="md:w-80 w-P2  min-h-72 px-2 shadow-sm shadow-black  border-2 border-orange-600 rounded-xl mx-auto  inset-0 bg-[#c8a86a38] flex justify-around items-center flex-col pt-6" onSubmit={(e)=>handleSubmit(e,email,password,isChecked,setError)}>
                    <h1 className='text-xl text-white p-2 f'>You can LogIn from here!</h1>
                    <input className='focus:outline-none border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="email" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input className='focus:outline-none mt-1 border-b-2 border-gray-800 rounded-md  p-2 md:w-4/5 w-P1 h-10' type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    <div className=" md:w-4/5 w-P1 h-10 flex justify-between items-center">
                        <label htmlFor="robot" className='f'>confirm you are not arobt</label>
                        <input className='mt-1 border border-gray-800 rounded-md  p-1' type="checkbox" id='robot' checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
                    </div>
                    {error && <p className="text-red-500 text-center p-2">{error}</p>} {/* Show error message if any */}
                    <button className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2' >Login</button>
                    <Link to={'/user.singUp.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>SingUp</Link>
                    <Link to={'/user.get.Your.Password.'+ today.getFullYear()+'.'+today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>You forgot your password.</Link>
                </form>
            </div>
        </>
    )
}
