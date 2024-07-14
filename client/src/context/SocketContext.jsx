import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';
import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('chat-user'));
        if (userDetails) {
            // const socket = io(import.meta.env.VITE_BACKEND_ENDPOINT, {

            // });
            const socket = io(import.meta.env.VITE_BACKEND_ENDPOINT, {
                query: {
                    userId: userDetails.data._id
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
                // console.log("users:", users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, []);

    return (
        <SocketContext.Provider
            value={{
                socket, onlineUsers
            }}
        >{children}</SocketContext.Provider>
    )
}