import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/user/me", {
                credentials: "include",
            });

            if (!res.ok) return;

            const data = await res.json();
            setUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                fetchUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};