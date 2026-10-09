import api from "../api/axios";
import type { WishListItemDto } from "../types/wishlist";

export const wishListService = {
  getWishList: async (): Promise<WishListItemDto[]> => {
    const response = await api.get<WishListItemDto[]>("/WishList");
    return response.data;
  },

  addToCart: async (productId: number): Promise<WishListItemDto> => {
    const response = await api.post<WishListItemDto>("/WishList", { productId});
    return response.data;
  },

  removeFromWishList: async (id: number): Promise<void> => {
    await api.delete(`/WishList/${id}`);
  },

 
  clearWishList: async (): Promise<void> => {
    await api.delete("/WishList/clear");
  }
};