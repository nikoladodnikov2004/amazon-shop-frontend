import {FiStar} from "react-icons/fi";

function ReviewSection(){

    return(


        <div className="mt-20">
            <div className="grid grid-cols-2 items-center justify-center">
                <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl px-10 py-10 h-60">
                    <div className="items-center flex flex-col justify-center">
                        <span className="font-extrabold text-4xl text-[#DAF1DE] tracking-tight border rounded-lg px-4 py-3 border-[#DAF1DE]/10 bg-[#051F20]/50 shadow-md">4.2</span>
                        
                        <div className="flex items-center gap-1 mt-2 text-2xl">
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                        </div>
                        <span className="font-extrabold text-2xl text-[#DAF1DE] tracking-tight shadow-md mt-1">Среден рейтинг на този продукт</span>
                    </div>
                </div>
            </div>
        </div>


    )



}
export default ReviewSection;