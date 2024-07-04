import React from 'react'
import Message from './Message'

const Messages = () => {
    return (
        <div className='hideScrollBar py-2 flex flex-col gap-2 overflow-y-scroll h-[400px]'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages