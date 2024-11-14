'use client'

import { CldImage } from 'next-cloudinary'

export const Img = ({ src, title }) => {
  return (
    <>
      <CldImage
        width={600}
        height={600}
        src={src}
        sizes='(max-width: 400px) 400px,
         (max-width: 768px) 768px,
         600px'
        alt={title}
        className='aspect-square object-contain w-full'
        crop='pad'
        gravity='center'
        background='white'
        border='40px_solid_white'
        format='webp'
      />
    </>
  )
}
