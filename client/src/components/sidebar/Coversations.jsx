import React from 'react'
import Coversation from './Coversation';

const Coversations = () => {
    return (
        <div className='py-2 flex flex-col gap-2 overflow-auto'>
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
            <Coversation />
        </div>
    )
}

export default Coversations