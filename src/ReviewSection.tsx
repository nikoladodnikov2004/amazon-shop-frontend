import {FiStar} from "react-icons/fi";
import { useState, useEffect } from 'react';
import {TiDelete} from "react-icons/ti";

interface Review{
        _id:string;
        productId:string;
        rating:number;
        comment:string;
        createdAt:string;
     }
function ReviewSection({productId}:{productId:string | number}){
    const [reviews, setReviews]=useState<Review[]>([])
    const [loading, setLoading]=useState<boolean>(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/reviews?productId=${productId}`)
        .then((res) => res.json())
        .then((data) => {
            setReviews(data);
            setLoading(false);
        })
    
    .catch((err) => {
        console.error("Грешка при зареждане на отзивите:", err);
        setLoading(false);
    });
}, [productId]);

     const [comment, setComment]=useState('');   
     const [rating, setRating]=useState<number>(0);  
      

    return(


        <div className="mt-20">
            <div className="grid grid-cols-2 items-center justify-center gap-5">
                <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 ">
                    <div className="items-center flex flex-col justify-center">
                        <span className="font-extrabold text-4xl text-[#DAF1DE] tracking-tight border rounded-lg px-4 py-3 border-[#DAF1DE]/10 bg-[#051F20]/50 shadow-md">4.2</span>
                        
                        <div className="flex items-center gap-1 mt-2 text-2xl">
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                            <FiStar className="fill-[#D4AF37]"></FiStar>
                        </div>
                        <span className="font-extrabold text-2xl text-[#DAF1DE] tracking-tight mt-1">Среден рейтинг на този продукт</span>
                        <div className="border border-b w-full my-6 border-[#DAF1DE]/30"></div>
                    </div>
                     {[5, 4, 3, 2, 1].map((rowCount) => (
                    <div key={rowCount} className="flex items-center gap-2 ">

                                <div className="flex gap-1 my-1">
                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                    <FiStar
                                    key={starIndex}
                                    className={`size-5 ${
                                        starIndex <= rowCount
                                        ? "fill-[#D4AF37] text-[#DAF1DE]" 
                                        : "text-[#DAF1DE]/30"              
                                    }`}
                                    />
                                ))}
                                </div>

                            
                            </div>
                            ))}

                </div>
                <div className="items-center flex flex-col justify-center">
                    
                <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 w-full ">
                <span className="text-DAF1DE text-xl font-extrabold tracking-tighter uppercase">Дайте вашата оценка за този продукт</span>
                     <div className="flex gap-2 items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                            key={star}
                            type="button"
                            onClick={() =>setRating(star)}
                            className="font-extrabold text-4xl text-[#DAF1DE] tracking-tight border rounded-lg px-4 py-3 border-[#DAF1DE]/10 bg-[#051F20]/50 shadow-md my-6 "
                            >
                                <FiStar
                                    className={`size-6 ${
                                        star <= rating
                                        ? "fill-[#D4AF37] duration-300"
                                        :"text-[#DAF1DE]/30 hover:fill-[#D4AF37]"
                                    }`}
                                  />      
                            </button>
                            
                                ))}
                                <button
                                type="button"
                                onClick={() =>setRating(0)}
                                className="ml-2"
                                ><TiDelete size={30}></TiDelete>
                                </button>
                     </div>
                     
                     
                     <span className="text-DAF1DE text-xl font-extrabold tracking-tighter uppercase">Оставете вашия отзив за продукта</span>
                     <form className="mt-5">
                        <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Оставете вашия отзив тук..."
                        className="tracking-tight font-semibold bg-[#051F20] border border-[#163B32] p-8 w-full rounded-xl resize-none text-gray-300"
                        />
                        <button type="submit" className='w-full py-4 mt-4 rounded-xl bg-[#235347] text-[#DAF1DE] hover:bg-[#163B32] transition-all shadow-[0_4px_25px_rgba(35,83,71,0.5)] border border-[#8EB69B]/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase font-bold tracking-tighter'>Добави ревю</button>
                     </form>
                </div>
                </div>
                                        
                <div className="bg-[#163B32]/20 border border-[#DAF1DE]/15 rounded-3xl p-8 h-full">
                               

                </div>
            </div>

                                

        </div>


    )



}
export default ReviewSection;