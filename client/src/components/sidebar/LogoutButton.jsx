import React from 'react'
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className='mt-8 ml-2'>
            <BiLogOut className='w-6 h-6 text-white cursor-pointer hover:scale-110' />
        </div>
    )
}

export default LogoutButton