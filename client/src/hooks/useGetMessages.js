import { useEffect, useState } from 'react';
import useConversation from '../store/useConversation';
import { toast } from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const apiRoute = import.meta.env.VITE_BACKEND_ENDPOINT + '/api/messages/' + selectedConversation._id;
                const response = await fetch(apiRoute, {
                    credentials: 'include'
                });
                const data = await response.json();
                if (data.error) throw new Error(data.error);
                setMessages(data.data);
            } catch (error) {
                toast.error(error.messages);
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
}

export default useGetMessages;