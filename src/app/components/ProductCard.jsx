'use client'

import { CldImage } from 'next-cloudinary';

export const ProductCard = ( product ) => {
  return (
    <div className="p-4 rounded shadow space-y-4 text-center">
      {product?.gallery?.data && (
        <CldImage
          width="200"
          height="200"
          src={product.gallery?.data[0]?.attributes?.url}
          alt={product.title}
          className="aspect-square object-contain"
          crop="pad"
          gravity="center"
          background="white"
          border="40px_solid_white"
          format="webp"
        />
      )}
      <h2>{product?.title}</h2>
      {product?.price && (<p>${product.price}</p>)}
    </div>
  )
}