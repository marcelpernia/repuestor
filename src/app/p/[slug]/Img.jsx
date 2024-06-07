'use client'

import { CldImage } from 'next-cloudinary';

export const Img = ({ src, title }) => {
  return (
    <>
      <CldImage
        width="600"
        height="600"
        src={src}
        alt={title}
        className="aspect-square object-contain"
        crop="pad"
        gravity="center"
        background="white"
        border="40px_solid_white"
        format="webp"
      />
    </>
  )
}