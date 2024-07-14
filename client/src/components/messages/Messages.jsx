import { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    return (
        <div className='hideScrollBar py-2 flex flex-col gap-2 overflow-y-scroll h-[400px]'>
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id}
                    ref={lastMessageRef}
                ><Message message={message} />
                </div>
            ))}
            {loading && (
                <span className='loading loading-dots bg-opacity-10 bg-slate-500 w-2/3'></span>
            )}
        </div>
    )
}

export default Messages