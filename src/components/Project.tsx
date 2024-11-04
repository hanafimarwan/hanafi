import React from 'react'
import { Item } from '../middleware/Item'
export const Project = () => {
    return (
        <div className='w-full sm:h-80  h-F'>
            <h1 id='project' className='text-center text-2xl  text-orange-700 italic underline'>My  Projects</h1>
            <div className="w-full h-full flex justify-around sm:mt-1 items-center md:flex-row flex-col ">
                <Item th={"/img/healty.jpeg"} title={"Healty Application"} para={"carebridge is a website appliction for managing medical records.It contains three intrfaces:doctor,patient and pharmacist."} url={""}/> 
                <Item th={"/img/bts.jpeg"} title={"BTP Company"} para={"BTP is a website for a construction company (houses ,bridge ,road...)."} url={"https://github.com/hanafimarwan/BTS_Project.git"}/> 
                <Item th={"/img/algo.jpg"} title={"Algorithme Application"} para={"Desktop Application for compile and execute algorithme code. "} url={""}/> 
                <Item th={"/img/hotel.jpeg"} title={"Hotel Application"} para={"placeholder is a descktop application for hoteliers. with this application they can have a comprehensive management of the hotel. "} url={"https://github.com/hanafimarwan/hotel.git"}/> 
            </div>
        </div>
    )
}
