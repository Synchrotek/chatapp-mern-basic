import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://i.pinimg.com/564x/7f/21/c9/7f21c92a6baf5e0ff9c87b3baba8e78f.jpg" alt="sender"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-800`}>
                Hi, there
            </div>
            <div className='chat-footer opacity-65 text-xs flex gap-1 items-center'>
                12:42
            </div>
        </div>
    )
}

export default Message