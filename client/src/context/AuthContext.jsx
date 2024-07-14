import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const userConfirm = JSON.parse(localStorage.getItem("chat-user"));
    const [authUser, setAuthUser] = useState(userConfirm.data || null);
    console.log("authUser:::::::", authUser);
    return <AuthContext.Provider value={{
        authUser, setAuthUser
    }}>{children}
    </AuthContext.Provider>
};