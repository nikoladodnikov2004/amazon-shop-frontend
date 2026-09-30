import api from "../api/axios";
import type {CartItemDto} from "../types/cart.ts"


export const cartService ={
    getCart: async()=>{
        const response = await api.get<CartItemDto[]>("/Cart");
            return response.data;
    },

    addToCart: async(productId: number, quantity:number=1)=>{
        const response = await api.post<CartItemDto[]>("/Cart/add", {productId, quantity});
            return response.data;
    },

    updateQuantity: async(cartItemId: number, quantity:number)=>{
        const response = await api.put<CartItemDto[]>(`/Cart/update/${cartItemId}`, {quantity});
            return response.data;
    },

    removeFromCart: async(cartItemId:number)=>{
        const response = await api.delete<CartItemDto[]>(`/Cart/remove/${cartItemId}`);
            
    },

    clearCart: async(productId: number, quantity:number=1)=>{
        const response = await api.delete<CartItemDto[]>("/Cart/clear");
            
    }


};