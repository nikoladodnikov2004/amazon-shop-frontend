import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios";
import {useAuth} from "./AuthContext"
import type {CategoryItemDto} from "../types/category.ts"
import {categoryService} from "../services/categoryService.tsx"



interface SearchContextType{
    
    isOpen: boolean;
    loading: boolean;
    
    
    openSearch: () =>void;
    closeSearch: () =>void;
    
}



const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> =({children})=>{
    
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading]= useState(false);
    


    
   



   


const openSearch = () => setIsOpen(true);
const closeSearch= () => setIsOpen(false);



return (
    <SearchContext.Provider
    value={{
        
        isOpen,
        loading,
       
       
       
        openSearch,
        closeSearch
        

    }}
    >
        {children}
    </SearchContext.Provider>
);
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
    throw new Error("useSearch трябва да се използва вътре в SearchProvider");
  }
    return context;

};
