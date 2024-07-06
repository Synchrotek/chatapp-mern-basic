import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const signup = async (inputs) => {
        // const { fullname, email, password, ConfirmPassword, gender } = inputs;
        const success = handleInputErrors(inputs);
        if (!success) return;
        setLoading(true);
        try {
            const apiRoute = import.meta.env.VITE_BACKEND_ENDPOINT + '/api/auth/signup';
            const res = await fetch(apiRoute, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs)
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // localstorage
            // context
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    };
    return { loading, signup };
}

const handleInputErrors = (inputs) => {
    if (
        !inputs.fullname || !inputs.email || !inputs.gender ||
        !inputs.password || !inputs.ConfirmPassword
    ) {
        toast.error("Please provide valid values.");
        return false;
    }
    if (inputs.password !== inputs.ConfirmPassword) {
        toast.error("Passwords do not match.");
        return false;
    }
    if (inputs.password.length < 6) {
        toast.error("Passwords must e at least 6 characters.");
        return false;
    }
    return true;
}

export default useSignup;