import React from 'react'
import { Header } from './components/Header'
import { Video } from './components/Video';
import { About } from './components/About';
import { Project } from './components/Project';
import { Servces } from './components/Servces';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
export const Home = () => {
    return (
        <div className=' w-full h-full '>
            <Header/>
            <Video/>
            <About/>
            <Project/>
            <Servces/>
            <Connect/>
            <Footer/>
        </div>
    )
}
