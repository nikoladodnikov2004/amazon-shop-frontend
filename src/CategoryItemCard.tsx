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
<div className=" flex relative items-center gap-3 p-3 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-white/10 rounded-2xl">

    <div className="flex items-center  justify-between gap-5">
        <div className=" text-[#DAF1DE]/60 bg-gradient-to-b from-[#163B32]/30 to-[#051F20]/50 border border-[#10B981]/10 rounded-2xl px-5 py-4">
                   <FiChevronRight size={10} className=""></FiChevronRight>
                   </div>
       <div> 
  <p className="font-bold text-[#DAF1DE] text-md">{categoryItem.name}</p>   
  <p className="font-light text-gray-300 text-xs">
    {subCategoriesCount>0
    ?`Налични ${subCategoriesCount} ${subCategoriesCount ===1 ? "подкатегория" : "подкатегории"}от тази категория`
    :`Няма подкатегории`
    }
    </p>  
    
        </div>
        <div>
<FiChevronRight size={20} className="text-[#10B981] justify-end"></FiChevronRight>
</div>
</div>
</div>



)
}

export default CategoryItemCard; 