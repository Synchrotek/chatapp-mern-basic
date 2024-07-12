import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const apiRoute = import.meta.env.VITE_BACKEND_ENDPOINT + '/api/messages/send/' + selectedConversation._id;
            const response = await fetch(apiRoute, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message }),
                credentials: 'include'
            })
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data.data])
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return { sendMessage, loading };
}

export default useSendMessage;