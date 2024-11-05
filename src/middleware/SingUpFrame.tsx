import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { handleSubmit, setFunctionB, setFunctionS } from '../api/Sing';
import { useNavigate } from 'react-router-dom';
import { sleep } from '../hook/function';
// import gg from '../../public/data.xml'

export const SingUpFrame = () => {
    // class
    const today = new Date();
    // variable
    const [email,setEmail]:[string,setFunctionS]=useState('');
    const [password,setPassword]:[string,setFunctionS]=useState('');
    const [confirmPassword,setConfirmPassword]:[string,setFunctionS]=useState('');
    const [error,setError]:[string,setFunctionS]=useState('');
    const [isChecked, setIsChecked]:[boolean,setFunctionB] = useState(false);
    const [loading, setLoading]:[boolean,setFunctionB] = useState(false);
    // function
    const navigate:any=useNavigate();
    const SingUp=async(e:React.FormEvent<HTMLFormElement>)=>{
        setLoading(true);
        e.preventDefault();
        const s:string=await handleSubmit(e,email,password,confirmPassword,isChecked);
        if(s==="New user added successfully!") navigate('/user.logIn.' + today.getFullYear() + '.' + today.getDate())
        setError(s);
        await sleep(1000);
        setLoading(false);
    }
    



    return (
        <>
        {loading && <div className="w-full h-full   flex justify-center items-center absolute top-0 left-0">
            <h1 className="text-4xl w-56 h-56 flex justify-center items-center rounded-full inset-0 bg-[#212e3f87] spinner">Loading...</h1>    
        </div>}
        <form className="md:w-80 w-P2 min-h-80 px-2 shadow-sm shadow-black border-2 border-orange-600 rounded-xl mx-auto inset-0 bg-[#c8a86a38] flex justify-around items-center flex-col pt-6" onSubmit={SingUp}>
            <h1 className='text-xl text-white p-2'>Create an account here!</h1>
            <input 
                className='focus:outline-none border-b-2 border-gray-800 rounded-md p-2 md:w-4/5 w-P1 h-10' 
                type="email" 
                placeholder='Email' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
            />
            <input 
                className='focus:outline-none mt-1 border-b-2 border-gray-800 rounded-md p-2 md:w-4/5 w-P1 h-10' 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
            />
            <input 
                className='focus:outline-none mt-1 border-b-2 border-gray-800 rounded-md p-2 md:w-4/5 w-P1 h-10' 
                type="password" 
                placeholder='Confirm Password' 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                required 
            />
            <div className="md:w-4/5 w-P1 h-10 flex justify-between items-center">
                <label htmlFor="robot" className=''>Confirm you are not a robot</label>
                <input 
                    className='mt-1 border border-gray-800 rounded-md p-1' 
                    checked={isChecked} 
                    onChange={e => setIsChecked(e.target.checked)} 
                    type="checkbox" 
                    id='robot'
                />
            </div>
            {error && <p className="text-red-500 text-center p-2">{error}</p>} {/* Show error message if any */}
            <button 
                className='p-2 bg-blue-800 font-bold italic text-white px-3 rounded-md border border-gray-800 hover:bg-white hover:text-gray-800 hover:border-blue-700 m-2' 
                type="submit" // Changed to type="submit" to handle form submission
            >
                Sign Up
            </button>
            <Link to={'/user.logIn.' + today.getFullYear() + '.' + today.getDate()} className='md:w-4/5 w-P1 text-white font-semibold italic underline'>
                Log In
            </Link>
        </form>
        </>
    )
}
