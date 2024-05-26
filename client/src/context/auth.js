import axios from 'axios';
import { useState, useContext, createContext, useEffect } from 'react';
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        customer: null,
        token: ""
    })

    // axios default settings
    axios.defaults.headers.common['Authorization']=auth?.token;
    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth({
                ...auth,
                customer: parsedData.customer,
                token: parsedData.token,
            })
        }
        //eslint-disable-next-line
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };