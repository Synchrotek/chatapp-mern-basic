import React from 'react'
import { LuMessageSquare } from "react-icons/lu";

const NoChatSelected = () => {
    return (
        <div className='md:min-w-[450px] flex flex-col justify-center items-center'>
            <div>Welcome, Jhon doe</div>
            <div>Select a chat to start messaging.</div>
            <LuMessageSquare className='mt-2 text-2xl' />
        </div>
    )
}

export default NoChatSelected