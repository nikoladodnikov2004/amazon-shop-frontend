import type { CategoryItemDto } from "./types/category.ts";
import type { SubCategoryDto } from "./types/category.ts"
import {useCategory} from "./context/CategoryContext.tsx"
import {FiChevronRight} from "react-icons/fi"

export interface CategoryItemCardProps {
    categoryItem:CategoryItemDto;
    subCategories?: SubCategoryDto[];
    
}



function CategoryItemCard({categoryItem, subCategories}:CategoryItemCardProps){
 const{categoryItems}=useCategory();
 const activeSubCategories = subCategories || categoryItem.subCategories || [];
 const subCategoriesCount = activeSubCategories.length;

    return(
<div className="group flex relative items-center gap-3 p-3 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-white/10 rounded-2xl w-full">

    <div className="flex items-center justify-between gap-3 w-full flex-1">
        <div className=" text-[#DAF1DE]/60 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#10B981]/10 rounded-2xl p-3 shrink-0">
                   <FiChevronRight size={14}></FiChevronRight>
                   </div>
       <div className="flex-1 min-w-0"> 
  <p className="font-bold text-[#DAF1DE] text-md">{categoryItem.name}</p>   
  <p className="font-light text-gray-300 text-xs">
    {subCategoriesCount>0
    ?`Налични ${subCategoriesCount} ${subCategoriesCount ===1 ? "подкатегория" : "подкатегории"}от тази категория`
    :`Няма подкатегории`
    }
    </p>  
    
        </div>
        <div className="shrink-0 ml-2 group-hover:text-[#10B981]">
<FiChevronRight size={20} className="text-gray-500"></FiChevronRight>
</div>
</div>
</div>



)
}

export default CategoryItemCard; 