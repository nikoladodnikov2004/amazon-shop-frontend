import React from "react";
import { useParams, Link } from "react-router-dom";
import { sectionData } from "../data/productData"; // Коригирайте пътя спрямо файла ви

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // Търсим продукта във всички секции
  const product = sectionData
    .flatMap((section) => section.products)
    .find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#051F20] flex flex-col items-center justify-center text-[#DAF1DE]">
        <h2 className="text-2xl font-bold mb-4">Продуктът не е намерен!</h2>
        <Link to="/" className="bg-[#10B981] text-[#051F20] px-4 py-2 rounded-xl font-bold">
          Върни се в началото
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#051F20] text-[#DAF1DE] py-12 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-[#163B32]/40 border border-[#163B32] p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl"
        />
        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <span className="text-xs text-[#10B981] font-bold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <p className="text-yellow-400 mt-2">★ {product.rating}</p>
            <p className="text-[#DAF1DE]/70 mt-4">
              Подробно описание на продукта, неговите характеристики и спецификации.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#DAF1DE]/10 flex items-center justify-between">
            <div>
              {product.oldPrice && (
                <span className="line-through text-sm text-[#DAF1DE]/40 block">
                  {product.oldPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-[#10B981]">{product.price}</span>
            </div>
            <button className="bg-[#10B981] text-[#051F20] font-bold px-6 py-3 rounded-xl hover:bg-[#235347] hover:text-[#DAF1DE] transition-all">
              Купи сега
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;