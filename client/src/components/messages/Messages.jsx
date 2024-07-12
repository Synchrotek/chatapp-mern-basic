import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {
    const { messages, loading } = useGetMessages();
    // console.log("messages:", messages);

    return (
        <div className='hideScrollBar py-2 flex flex-col gap-2 overflow-y-scroll h-[400px]'>
            {!loading && messages.length > 0 && messages.map((message) => (
                <Message key={message._id} message={message} />
            ))}
            {loading && (
                <span className='loading loading-dots bg-opacity-10 bg-slate-500 w-2/3'></span>
            )}
        </div>
    )
}

export default Messages