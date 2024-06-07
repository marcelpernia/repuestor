import { getProductBySlug } from "@/app/services/getProductBySlug";
import { Img } from "./Img";

export default async function Page({ params }) {

  const { slug } = params;
  
  const { data } = await getProductBySlug({ slug });
  const {attributes: p} = data[0]

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-[600px]">
        <div className="space-y-4">
          <Img 
            src={p.gallery?.data[0]?.attributes?.url}
            title={p.title}
          />
          <div className="space-y-1">
            <div className="text-xs md:text-sm">
              <span className="p-1 bg-gray-100 inline-block">SKU: {p.sku}</span>
            </div>
            <h1 className="text-2xl font-semibold">{p.title}</h1>
          </div>
          {p.price && (<p className="text-xl font-semibold">${p.price}</p>)}
          <p className="text-slate-700">{p.Description}</p>
        </div>
        
        <div className="flex md:flex-row flex-col gap-2 md:gap-4 md:pt-10 pt-6">
          <select className="bg-white border border-gray-300 rounded-md py-2 px-2 h-12 flex-none">
            <option value="1">1 unidad</option>
            <option value="2">2 unidades</option>
            <option value="3">3 unidades</option>
            <option value="4">4 unidades</option>
            <option value="5">5 unidades</option>
          </select>
          <button className="bg-brand-700 hover:bg-brand-800 text-white py-2 px-4 h-12 rounded-md w-full font-semibold">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
}