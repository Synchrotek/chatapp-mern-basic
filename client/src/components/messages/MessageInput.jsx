import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input type="text"
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus-within:outline-none'
                    placeholder='Type message here .'
                />
                <button
                    className='absolute right-0 top-1/4 pe-3 text-xl hover:scale-110'
                ><RiSendPlaneFill />
                </button>
            </div>
        </form>
    )
}

export default MessageInput