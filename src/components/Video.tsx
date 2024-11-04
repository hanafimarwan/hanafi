import React from 'react';

export const Video = () => {
    return (
        // <div className='w-full lg:h-80 h-52 bg-green-700 flex justify-center items-center'>
        //     <video 
        //         autoPlay 
        //         muted 
        //         loop 
        //         className='w-full h-full object-cover'
        //     >
        //         <source src="/vd.mp4" type="video/mp4" />
        //         Your browser does not support the video tag.
        //     </video>
        // </div>
        <>
        <div className="relative w-full h-96 overflow-hidden md:block hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
                <source src="/vd.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10  h-full flex justify-normal items-center">
                {/* <img src="/img/LOGO.jpg" className='w-56' alt="this is my profile"/> */}
                <div className='p-4  min-h-96 flex justify-between items-center'>
                    <div className='h-full'>
                        <img src="/img/LOGO.jpg" alt=" " className=' w-60   border-2 border-orange-700'/>
                        <h3 className='block  text-center bg-orange-700 text-white'>Hanafi Marouane</h3>
                        <p className='text-white block text-center bg-orange-700'>2000/07/01</p>
                        <p className='text-white block text-center bg-orange-700'>Morooco,Settat</p>
                    </div>
                    <div className='ml-4 font-bold text-blue-800 text-xl'>
                        <h1 id='about' className='text-center text-2xl  text-orange-700 italic underline'>About Me</h1>
                        <span className='italic'>Hi</span> &#128075; !<br/>
                        My name is Hanafi Marouane,I live in Settat ,Morocco<br/>
                        I obtained my baccalaureate in 2021 ,Mathematical Sciences Department ,
                        I a bachelor's degree in programming in 2024.<br/>
                        I program website ,phone application and desktop.<br/>
                        I studied a group of languages and framework Like:<br/>
                        <ul>
                            <li className='text-sm'><span className='text-white italic font-bold text-lg'>languge: </span>Java,PHP,JavaScript,Python,C,C++.</li>
                            <li className='text-sm'><span className='text-white italic font-bold text-lg'>framework: </span>reactjs,react native laravel,Anguler,tailwind css,flask,swing ,jee ...</li>
                            <li className='text-sm'><span className='text-white italic font-bold text-lg'>other skiles: </span>xml,json,git,gitHub,docker... </li>
                        </ul> 
                        <p>New I am interested in studying artificial intelligence and big data analysis.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative w-full h-60 overflow-hidden md:hidden block ">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
                <source src="/vd.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10  h-full">
                <div className='h-full mt-3 ml-5'>
                    <img src="/img/LOGO.jpg" alt=" " className=' w-40   border-2 border-orange-700'/>
                    <h3 className='w-40 block  text-center bg-orange-700 text-white'>Hanafi Marouane</h3>
                    <p className='w-40 text-white block text-center bg-orange-700'>2000/07/01</p>
                    <p className='w-40 text-white block text-center bg-orange-700'>Morooco,Settat</p>
                </div>
            </div>
        </div>
        </>
    );
}
