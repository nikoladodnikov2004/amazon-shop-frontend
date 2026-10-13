import React, {createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios";
import {useAuth} from "./AuthContext"
import type {CategoryItemDto} from "../types/category.ts"
import {categoryService} from "../services/categoryService.tsx"

export interface CategoryItem {
    id: number;
    name: string;
   
    
}

interface CategoryContextType{
    categoryItems: CategoryItemDto[];
    isOpen: boolean;
    loading: boolean;
    addCategory: (name: string) => Promise<void>;
    removeCategory:(id:number) => Promise<void>;
    updateName:(id:number, name: string) => Promise<void>;
    openCategory: () =>void;
    closeCategory: () =>void;
    
}



const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{children: React.ReactNode}> =({children})=>{
    const [categoryItems, setCategoryItems] = useState<CategoryItemDto[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading]= useState(false);
    const {isAuthenticated}=useAuth();


    
    const fetchCategory = async () =>{
        try{
            setLoading(true);
            const data = await categoryService.getCategory();
            setCategoryItems(data || []);
        } catch (err){
            console.error("Грешка при зареждане на категориите:", err);
        } finally {
            setLoading(false);
        }
    }



    useEffect(()=>{
        if(isAuthenticated){
            fetchCategory();
        }else{
            setCategoryItems([])
        }
    }, [isAuthenticated]);

    const addCategory = async ( name: string) =>{
        try{
            await categoryService.addCategory(name);
            
           await fetchCategory();
        
        setIsOpen(true);
    } catch (err){
        console.error("Грешка при добавяне в секцията за категории:", err);
    }
};

const removeCategory= async (id:number) => {
    try{
        await categoryService.removeCategory(id);
        setCategoryItems((prev) => prev.filter((item) => item.id !==id));

    }catch(err){
      console.error("Грешка при премахване:", err);  
    }
};

const updateName = async (id:number, name: string) => {
    const item=categoryItems.find((i) => i.id ===id);
    if(!item)
        return;

    
    try{
         await categoryService.updateName(id, name);
        setCategoryItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, name } : i))
    )
    }catch (err){
       console.error("Грешка при промяна на количеството:", err); 
    }
};


const openCategory = () => setIsOpen(true);
const closeCategory= () => setIsOpen(false);



return (
    <CategoryContext.Provider
    value={{
        categoryItems,
        isOpen,
        loading,
        addCategory,
        removeCategory,
        updateName,
        openCategory,
        closeCategory
        

    }}
    >
        {children}
    </CategoryContext.Provider>
);
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
    throw new Error("useCategory трябва да се използва вътре в CategoryProvider");
  }
    return context;

};
