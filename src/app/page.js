'use client';
import { CldImage } from 'next-cloudinary';

const getProducts = async () => {
  const res = await fetch('https://strapi-production-387e.up.railway.app/api/products?populate=*', { next: { revalidate: 1} });
  const {data} = await res.json();
  return data;
};

export default async function Home() {

  const products = await getProducts();

  return (
    <main className="grid place-content-center min-h-screen">
      <div className="grid grid-cols-5 gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-4 rounded shadow space-y-4 text-center">
            {product.attributes?.gallery?.data && (
              <CldImage
                width="200"
                height="200"
                src={product.attributes?.gallery?.data[0]?.attributes?.url}
                alt={product.attributes.title}
                className="aspect-square object-contain"
                crop="pad"
                gravity="center"
                background="white"
                border="40px_solid_white"
                format="webp"
              />
            )}
            <h2>{product.attributes.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
