import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios";


interface User{
    id:number;
    email: string;
    firstName?:string;
    lastName?:string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (data: {firstName: string; lastName: string; email: string; password:string;}) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> =({ children}) => {
    const [user, setUser]=useState<User | null>(() => {
        const savedUser=localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });



    const [token, setToken]=useState<string | null>(localStorage.getItem('token'));
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMe = async () => {    
         const storedToken = localStorage.getItem('token');   
        if(storedToken){
            try{
            const res = await api.get('/auth/me');
            setUser(res.data);
            localStorage.setItem('user', JSON.stringify(res.data));
            }catch(error){
                console.error("Невалиден токен, излизане...", error);
                logout();
            }
        }
        setLoading(false);
        };
        fetchMe();
    }, [token]);

    const login =async (email: string, password: string ) => {
        const response = await api.post('/auth/login', {email, password});
        const jwtToken = response.data.token || response.data.Token;

        localStorage.setItem('token', jwtToken);
        setToken(jwtToken);
        
        try {
            const userRes = await api.get('/auth/me');
            setUser(userRes.data);
            localStorage.setItem('user', JSON.stringify(userRes.data));
        } catch (error){
            console.error("Грешка при изтегляне на профила след вход:", error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    const register =async (data: {firstName: string; lastName: string; email: string, password: string }) => {
         await api.post('/auth/register', data);
        
        await login(data.email, data.password);
    };

    return (
        <AuthContext.Provider value={{user, token, login, logout, register, isAuthenticated: !!token}}>
        {children}
        </AuthContext.Provider>
    ); 
};

export const useAuth = () =>{
    const context=useContext(AuthContext);
    if(!context){
        throw new Error('useAuth трябва да се използва вътре в AuthProvider');
    }
    return context;
};