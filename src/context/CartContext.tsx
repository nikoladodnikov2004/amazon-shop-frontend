import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios";
import {useAuth} from "./AuthContext"
import type {CartItemDto} from "../types/cart.ts"
import {cartService} from "../services/cartService.tsx"

export interface CartItem {
    id: number;
    name: string;
    brand: string;
    category: string;
    price: number;
    image:string;
    quantity: number;
    stockQuantity: number;
    imageUrl: string;
    totalSum: number;
    
}

interface CartContextType{
    cartItems: CartItemDto[];
    isOpen: boolean;
    loading: boolean;
    addToCart: (productId: number, quantity?: number) => Promise<void>;
    removeFromCart:(id:number) => Promise<void>;
    updateQuantity:(id:number, delta: number) => Promise<void>;
    openCart: () =>void;
    closeCart: () =>void;
    clearCart: () => Promise<void>;
    totalItemsCount: number;
    totalPrice: number;
}



const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> =({children})=>{
    const [cartItems, setCartItems] = useState<CartItemDto[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading]= useState(false);
    const {isAuthenticated}=useAuth();


    useEffect(()=>{
        if(isAuthenticated){
            setLoading(true);
            cartService
            .getCart()
            .then((data)=>setCartItems(data))
            .catch((err) => console.error("Грешка при зареждане на количката:", err))
            .finally(() => setLoading(false));
        }else{
            setCartItems([])
        }
    }, [isAuthenticated]);

    const addToCart = async (productId:number, quantity: number = 1) =>{
        try{
            const updatedItem = await cartService.addToCart(productId, quantity);
            
            setCartItems((prev) => {
                const index = prev.findIndex((item) => item.productId === productId);
                if(index > -1){
                    const newCart = [...prev];
                    newCart[index] = updatedItem;
                    return newCart;
                }
                return [...prev, updatedItem];
        });
        setIsOpen(true);
    } catch (err){
        console.error("Грешка при добавяне в количката:", err);
    }
};

const removeFromCart = async (id:number) => {
    try{
        await cartService.removeFromCart(id);
        setCartItems((prev) => prev.filter((item) => item.id !==id));

    }catch(err){
      console.error("Грешка при премахване:", err);  
    }
};

const updateQuantity = async (id:number, delta: number) => {
    const item=cartItems.find((i) => i.id ===id);
    if(!item)
        return;

    const newQuantity = item.quantity + delta;
    if(newQuantity <=0){
        await removeFromCart(id);
        return;
    }

    try{
        const updated = await cartService.updateQuantity(id, newQuantity);
        setCartItems((prev) =>
            prev.map((i) => (i.id === id ? updated: i))
    )
    }catch (err){
       console.error("Грешка при промяна на количеството:", err); 
    }
};

const clearCart = async () => {
    try{
        await cartService.clearCart();
        setCartItems([]);
        
    } catch (err) {
      console.error("Грешка при изчистване на количката:", err);
    }

};

const openCart = () => setIsOpen(true);
const closeCart = () => setIsOpen(false);

const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
const totalPrice = cartItems.reduce((acc, item) => acc + item.totalSum, 0);


return (
    <CartContext.Provider
    value={{
        cartItems,
        isOpen,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        openCart,
        closeCart,
        clearCart,
        totalItemsCount,
        totalPrice,

    }}
    >
        {children}
    </CartContext.Provider>
);
};