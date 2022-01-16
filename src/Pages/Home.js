import React, {useEffect} from 'react'
import  Sidebar  from '../Components/Sidebar/Sidebar';


export const Home = () => {
    useEffect(() => {
        document.title = "Chat | Home";
    }, [])
    return (
        <div className='h-screen bg-white'>
            <Sidebar/>
        </div>
    )
}

