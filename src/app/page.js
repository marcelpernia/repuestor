import { ProductCard } from './components/ProductCard';
import Slider from './components/Slider';

const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?populate=*`, { next: { revalidate: 1} });
  const {data} = await res.json();
  return data;
};

export default async function Home() {

  const products = await getProducts();

  return (
    <>
      <Slider />
      <div className="py-10 container mx-auto">
        Cantidad de productos: {products.length}
        <div className="grid grid-cols-5 gap-5">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product.attributes} 
            />
          ))}
        </div>
      </div>
    </>
  );
}
