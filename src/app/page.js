import Link from 'next/link';
import { ProductCard } from './components/ProductCard';
import Slider from './components/Slider';
import { getProducts } from './services/getProducts';


export default async function Home({searchParams}) {

  const page = searchParams.page || 1;

  const {data:products, meta} = await getProducts({page});
  const {total} = meta.pagination;
  return (
    <>
      <Slider />
      <div className="py-10 px-4 container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product.attributes} 
            />
          ))}
        </div>
        <div className='text-center space-y-4 pt-10'>
          <div className="text-gray-600 text-xs">
            Mostrando {products.length} de {total} productos
          </div>
          {products.length < total && (
            <div>
              <Link
                scroll={false}
                href={{
                  pathname: '/',
                  query: {
                    page: Number(page) + 1,
                  },
                }}
              className="bg-brand-700 hover:bg-brand-800 text-white font-bold py-2 px-4 rounded">
                Mostrar más
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
