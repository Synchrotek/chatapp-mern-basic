import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected';
import useConversation from '../../store/useConversation';

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // cleanup function when unmounting
        return () => setSelectedConversation(null)
    }, [setSelectedConversation]);

    if (!selectedConversation) {
        return <NoChatSelected />
    }

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {/* Header */}
            <div className='bg-slate-500 px-4 py-2 mb-4'>
                <span className='label-text'>To:</span>
                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>

            <Messages />
            <MessageInput />
        </div>
    )
}

export default MessageContainer