import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios.ts";
import {useAuth} from "./AuthContext.tsx"
import type {WishListItemDto} from "../types/wishlist.ts"
import {wishListService} from "../services/wishListService.tsx"

export interface WishListItem {
    id: number;
    name: string;
    brand: string;
    category: string;
    price: number;
    image:string;
    stockQuantity: number;
    imageUrl: string;
    
    
}

interface WishListContextType{
    wishListItems: WishListItemDto[];
    isOpen: boolean;
    loading: boolean;
    addToWishList: (productId: number, quantity?: number) => Promise<void>;
    removeFromWishList:(id:number) => Promise<void>;
    
    openWishList: () =>void;
    closeWishList: () =>void;
    clearWishList: () => Promise<void>;
    
    
}



const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> =({children})=>{
    const [wishListItems, setWishListItems] = useState<WishListItemDto[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading]= useState(false);
    const {isAuthenticated}=useAuth();


    
    const fetchWishList = async () =>{
        try{
            setLoading(true);
            const data = await wishListService.getWishList();
            setWishListItems(data || []);
        } catch (err){
            console.error("Грешка при зареждане на списъка:", err);
        } finally {
            setLoading(false);
        }
    }



    useEffect(()=>{
        if(isAuthenticated){
            fetchWishList();
        }else{
            setWishListItems([])
        }
    }, [isAuthenticated]);

    const addToWishList = async (productId:number) =>{
        try{
            await wishListService.addToCart(productId);
            
           await fetchWishList();
        
        setIsOpen(true);
    } catch (err){
        console.error("Грешка при добавяне в списъка:", err);
    }
};

const removeFromWishList = async (id:number) => {
    try{
        await wishListService.removeFromWishList(id);
        setWishListItems((prev) => prev.filter((item) => item.id !==id));

    }catch(err){
      console.error("Грешка при премахване:", err);  
    }
};



const clearWishList = async () => {
    try{
        await wishListService.clearWishList();
        setWishListItems([]);
        
    } catch (err) {
      console.error("Грешка при изчистване на списъка:", err);
    }

};

const openWishList = () => setIsOpen(true);
const closeWishList= () => setIsOpen(false);





return (
    <WishListContext.Provider
    value={{
        wishListItems,
        isOpen,
        loading,
        addToWishList,
        removeFromWishList,
        
        openWishList,
        closeWishList,
        clearWishList,
        

    }}
    >
        {children}
    </WishListContext.Provider>
);
};

export const useWishList = () => {
    const context = useContext(WishListContext);
    if (!context) {
    throw new Error("useWishList трябва да се използва вътре в WishListProvider");
  }
    return context;

};
