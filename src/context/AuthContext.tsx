import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios";
import { LogOut } from "lucide-react";
import { data } from "react-router-dom";

interface User{
    id:number;
    email: string;
    firstName?:string;
    lastName?:string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (email: string, pass: string) => Promise<void>;
    register: (data: {firstName: string; lastName: string; email: string; password:string;}) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> =({ children}) => {
    const [user, setUser]=useState<User | null>(null);
    const [token, setToken]=useState<string | null>(localStorage.getItem('token'));
    
    useEffect(() => {
        if(token){
            api.get('/auth/me')
            .then((res) => setUser(res.data))
            .catch(() => logout());
        }
    }, [token]);

    const login =async (email: string, password: string ) => {
        const response = await api.post('/auth/login', {email, password});
        const {token: jwtToken, user: userData} = response.data;

        localStorage.setItem('token', jwtToken);
        setToken(jwtToken);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const register =async (data: {firstName: string; lastName: string; email: string, password: string }) => {
        const response = await api.post('/auth/register', data);
        const {token: jwtToken, user: userData} = response.data;

        localStorage.setItem('token', jwtToken);
        setToken(jwtToken);
        setUser(userData);
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