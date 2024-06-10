'use client'

import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ( product ) => {
  return (
    <Link href={`/p/${product.slug}`} className="p-2 md:p-4 rounded-md border border-gray-100 space-y-4">
      {product?.gallery?.data ? (
        <CldImage
          width={200}
          height={200}
          src={product.gallery?.data[0]?.attributes?.url}
          alt={product.title}
          className="aspect-square object-contain mx-auto"
          crop="pad"
          gravity="center"
          background="white"
          border="40px_solid_white"
          format="webp"
        />
      ) : (
        <Image
          width={200}
          height={200}
          src="/placeholder.png"
          alt={product.title}
          className="aspect-square object-contain mx-auto"
        />
      )}
      <h2 className='md:text-base text-sm'>{product?.title}</h2>
      {product?.price && (<p>${product.price}</p>)}
    </Link>
  )
}