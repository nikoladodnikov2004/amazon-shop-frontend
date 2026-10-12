import api from "../api/axios";
import type { CategoryItemDto } from "../types/category";

export const categoryService = {
  getCategory: async (): Promise<CategoryItemDto[]> => {
    const response = await api.get<CategoryItemDto[]>("/Category");
    return response.data;
  },

  addCategory: async (id: number): Promise<CategoryItemDto> => {
    const response = await api.post<CategoryItemDto>("/Category", { id });
    return response.data;
  },


  updateName: async (id: number, name: string): Promise<CategoryItemDto> => {
    const response = await api.put<CategoryItemDto>(`/Cart/update/${id}`, { name });
    return response.data;
  },

  removeCategory: async (id: number): Promise<void> => {
    await api.delete(`/Category/${id}`);
  },

 
 
};