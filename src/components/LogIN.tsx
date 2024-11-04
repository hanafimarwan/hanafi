import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSubmitLogIn, setFunctionB, setFunctionS, setFunctionU } from '../api/Sing';
import { Data } from './Data';
import { User } from '../api/get';
import { sleep } from '../hook/function';

import { LogInForm } from '../middleware/LogInForm';

export const LogIN = () => {
    
    const [users, setUsers]: [User[], setFunctionU] = useState<User[]>([]);
    const [loading, setLoading]:[boolean,setFunctionB] = useState(false);
    const navigate=useNavigate();
    const handleSubmit=async(e:React.FormEvent,email:string,password:string,isChecked:boolean,setE:setFunctionS,):Promise<void>=>{
        setLoading(true);
        const str:any=await handleSubmitLogIn(e,email,password,isChecked);
        if(str==='good') {
            setE(str);
            navigate("/#contact");
        }
        else if(typeof str!='string') {
            setUsers(str);
        }
        else setE(str);
        await sleep(1000);
        setLoading(false);
    }

    return (
        users.length===0?(
            <>
                
                <LogInForm  handleSubmit={handleSubmit} loading={loading}/>
            </>
        
        ):(
            <div>
                <Data data={users}/>
            </div>
        )
        
    )
}
