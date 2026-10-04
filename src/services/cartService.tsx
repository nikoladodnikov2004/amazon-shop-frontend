import api from "../api/axios";
import type { CartItemDto } from "../types/cart";

export const cartService = {
  getCart: async (): Promise<CartItemDto[]> => {
    const response = await api.get<CartItemDto[]>("/Cart");
    return response.data;
  },

  addToCart: async (productId: number, quantity: number = 1): Promise<CartItemDto> => {
    const response = await api.post<CartItemDto>("/Cart", { productId, quantity });
    return response.data;
  },


  updateQuantity: async (id: number, quantity: number): Promise<CartItemDto> => {
    const response = await api.put<CartItemDto>(`/Cart/update/${id}`, { quantity });
    return response.data;
  },

  removeFromCart: async (id: number): Promise<void> => {
    await api.delete(`/Cart/remove/${id}`);
  },

 
  clearCart: async (): Promise<void> => {
    await api.delete("/Cart/clear");
  }
};