import React, { useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}
            className='px-4 my-3'>
            <div className='w-full relative'>
                <input type="text"
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus-within:outline-none'
                    placeholder='Type message here .'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type='submit'
                    className='absolute right-0 top-1/4 pe-3 text-xl hover:scale-110'
                >{loading ?
                    <span className='loading loading-spinner'></span>
                    : <RiSendPlaneFill />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput