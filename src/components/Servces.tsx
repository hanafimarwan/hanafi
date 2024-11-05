import React, { useRef } from 'react';
import { ItemServce } from '../middleware/ItemServce';
import { Link } from 'react-router-dom';

export const Servces = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        videoRef.current?.play();
        audioRef.current?.play();
    };

    const handlePause = () => {
        videoRef.current?.pause();
        audioRef.current?.pause();
    };

    return (
        <div className='w-full xl:h-A lg:h-B md:h-C sm:h-D h-E bg-slate-300 mt-10 mb-10'>
            <h1 id='servces' className='text-center text-2xl text-orange-700 italic underline pt-3'>Me Services</h1>
            <div className="w-full xl:h-A1 lg:h-B1 md:h-C1 sm:h-D1 h-E1 flex justify-normal items-start px-2 pt-5 sm:flex-row flex-col">
                <div className="w-72 h-full text-white font-bold rounded sm:mr-3 mx-auto sm:mb-0 mb-2 flex justify-between items-center flex-col">
                    <div className='w-full sm:h-4/5 h-52 flex justify-center items-center'>
                        <video
                            ref={videoRef}
                            controls
                            className="w-full h-full  z-10"
                            onPlay={handlePlay}
                            onPause={handlePause}
                        >
                            <source src="/s_vd.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <audio ref={audioRef} src="/ms.mp3" /> {/* Add your audio file path */}
                    </div>
                    <Link to={"/cv.download"} className='p-2 bg-orange-400 mb-5 b_cv rounded-lg'>Biography</Link>
                </div>
                <div className="sm:w-4/5 w-full h-full flex justify-between items-center flex-col">
                    <ItemServce
                        flex={true}
                        imgs={"/img/mapp.jfif"}
                        para={"Mobile app creation combines creativity with powerful technology, allowing me as a developer to design intelligent, interactive user-focused applications. With programming languages like Java, Swift, Kotlin, and JavaScript, I can build apps that run seamlessly on both iOS and Android systems. Supported by frameworks like Flutter and React Native, creating apps that provide rich functionality, intuitive interfaces, and an engaging user experience is easier than ever."}
                    />
                    <ItemServce
                        flex={false}
                        imgs={"/img/dapp.jfif"}
                        para={"The development of desktop applications allows for powerful and full-featured software that can run natively on different operating systems, including Windows, macOS, and Linux. Using programming languages like Java, Python, and C++, I can create responsive, high-performance applications tailored to different user needs. Using frameworks like Electron, .NET, and JavaFX."}
                    />
                    <ItemServce
                        flex={true}
                        imgs={"/img/wapp.jfif"}
                        para={"Web application development brings together innovation and robust technology, enabling me to create dynamic, responsive, and user-centric experiences accessible across all devices. Using programming languages like JavaScript, HTML, and CSS, alongside frameworks like React, Angular, and Vue, I can build applications that deliver seamless performance and intuitive interfaces. Modern tools like Node.js and Express also allow me to create powerful, scalable backends."}
                    />
                </div>
            </div>
        </div>
    );
};
