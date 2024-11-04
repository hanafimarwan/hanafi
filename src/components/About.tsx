import React from 'react'

export const About = () => {
    return (
            <div className='md:hidden block p-2'>
                <h1 id='about' className='text-center text-2xl  text-orange-700 italic underline'>About Me</h1>
                <span className='italic'>Hi</span> &#128075; !<br/>
                My name is Hanafi Marouane,I live in Settat ,Morocco<br/>
                I obtained my baccalaureate in 2021 ,Mathematical Sciences Department ,
                I a bachelor's degree in programming in 2024.<br/>
                I program website ,phone application and desktop.<br/>
                I studied a group of languages and framework Like:<br/>
                <ul>
                    <li className='text-sm'><span className='text-blue-800 italic font-bold text-lg'>languge: </span>Java,PHP,JavaScript,Python,C,C++.</li>
                    <li className='text-sm'><span className='text-blue-800 italic font-bold text-lg'>framework: </span>reactjs,react native laravel,Anguler,tailwind css,flask,swing ,jee ...</li>
                    <li className='text-sm'><span className='text-blue-800 italic font-bold text-lg'>other skiles: </span>xml,json,git,gitHub,docker... </li>
                </ul> 
                <p>New I am interested in studying artificial intelligence and big data analysis.</p>
            </div>
    )
}
