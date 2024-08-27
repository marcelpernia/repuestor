'use client'
import Image from 'next/image';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import ButtonAddCart from './button-add-cart';

export const ProductCard = ({ product: { id, attributes:product } } ) => {
  return (
    <div className="p-2 md:p-4 rounded-md border border-gray-100 space-y-4">
      <Link href={`/p/${product.slug}`} >
        {product.gallery?.data ? (
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
      </Link>
      <div className='space-y-1'>
        <Link href={`/p/${product.slug}`} className='md:text-base text-sm line-clamp-1 hover:underline' title={product.title}>{product.title}</Link>
        <p className='font-semibold'>${product.price ?? 0}</p>
      </div>
      <div>
        <ButtonAddCart product={{id, ...product}}/>
      </div>
    </div>
  )
}