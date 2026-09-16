import React from "react";
import {TiDelete} from "react-icons/ti";
import {FiStar, FiThumbsUp} from "react-icons/fi";



export interface ReviewCardProps {
    review:{
    id:string;
    rating:number;
    comment:string;
    createdAt:string;
};
onDelete:(id:string)=>void;
}


function ReviewCard({review, onDelete}:ReviewCardProps){
    return(
        
    <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-2xl p-10 backdrop-blur-md transition-all hover:border-[#DAF1DE]/30 ">
        <button
        type="button"
        onClick={() =>onDelete(review.id)}
        className="absolute top-3 right-3 text-[#DAF1DE]/30 hover:text-red-400 transition-colors cursor-pointer"
        >
            <TiDelete size={22}></TiDelete>
        </button>

        
        <div className="flex gap-1 mb-5">
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <FiStar
                 key={starIndex}
                 className={`size-5 ${
                 starIndex <= review.rating
                 ? "fill-[#D4AF37] text-[#DAF1DE]" 
                 : "text-[#DAF1DE]/30" 
                                                
                     }`}
                       />
                                            
                                            
                         ))}
                                        
                 </div>
                 <div className="">
                    <p className="text-[#DAF1DE] text-sm font-medium leading-relaxed my-3 line-clamp-3 overflow-hidden">
                    "{review.comment}"
                    </p>
                 </div>
                 <div className="border-0.5 border-b my-3 border-[#DAF1DE]/20"></div>
                    <div className="flex items-center justify-between">
                        <span className="text-[#DAF1DE]/50 tracking-tight text-sm ">{new Date (review.createdAt).toLocaleDateString("bg-BG")}</span>
                        
                        <div className="flex items-center gap-2">
                        <span className="text-[#DAF1DE]/70 tracking-tight text-sm font-semibold">Харесайте този отзив</span>
                         
                         <FiThumbsUp className="text-[#DAF1DE] hover:text-[#10B981] duration-300 transition-colors cursor-pointer tracking-tight text-lg font-semibold"></FiThumbsUp>
                         </div>
                    </div>
                 
    </div>
    
    )
}


export default ReviewCard;