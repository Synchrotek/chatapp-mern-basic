import React from 'react'
import Coversation from './Coversation';

const Coversations = () => {
    return (
        <div className='hideScrollBar py-2 flex flex-col gap-2 overflow-y-scroll h-[400px]'>
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
        </div>
    )
}

export default Coversations