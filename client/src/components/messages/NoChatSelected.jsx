import React from 'react'
import { LuMessageSquare } from "react-icons/lu";
import { useAuthContext } from '../../context/AuthContext';

const NoChatSelected = () => {
    const { authUser } = useAuthContext();

    return (
        <div className='md:min-w-[450px] flex flex-col justify-center items-center'>
            <div>Welcome, {authUser.fullName}</div>
            <div>Select a chat to start messaging.</div>
            <LuMessageSquare className='mt-2 text-2xl' />
        </div>
    )
}

export default NoChatSelected