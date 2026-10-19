import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios";
import {useAuth} from "./AuthContext"
import type {CategoryItemDto} from "../types/category.ts"
import {categoryService} from "../services/categoryService.tsx"
import type {BestSellerItemDto} from "../types/bestSeller.ts"

export interface BestSellerItem {
    id: number;
    name: string;
    brand: string;
    category: string;
    price: number;
    image:string;
    quantity: number;
    stockQuantity: number;
    imageUrl: string;
    
    
}

interface SearchContextType{
    bestSellers: BestSellerItemDto[];
    isOpen: boolean;
    loading: boolean;
    
    
    openSearch: () =>void;
    closeSearch: () =>void;
    
}



const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> =({children})=>{
    
    const [bestSellers, setBestSellers] = useState<BestSellerItemDto[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading]= useState(false);
    
    

    
   const fetchBestSellers = async() =>{
        try{
            const response = await api.get<BestSellerItemDto[]>("/Product/bestsellers")
            setBestSellers(response.data);
        }catch(err){
            console.error("Грешка при зареждане на бестселъри:", err);
        }
        }

        useEffect(()=>{
                
                    fetchBestSellers()
                
            }, []);
    



   


const openSearch = () => setIsOpen(true);
const closeSearch= () => setIsOpen(false);



return (
    <SearchContext.Provider
    value={{
        
        isOpen,
        loading,
       bestSellers,
       
       
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
