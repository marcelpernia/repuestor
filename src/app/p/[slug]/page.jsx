import { redirect } from 'next/navigation'
import { getProductBySlug } from '@/app/services/getProductBySlug'
import { Img } from './Img'
import Image from 'next/image'
import { AddToCart } from './add-to-cart'
export default async function Page ({ params }) {
  const { slug } = params

  const { data } = await getProductBySlug({ slug })
  const { id, attributes: p } = data[0] || {}

  if (!p) {
    redirect('/')
  }

  return (
    <div className='py-10 px-4'>
      <div className='mx-auto max-w-[600px] space-y-4'>
        <div className='space-y-4'>
          {p?.gallery?.data
            ? (
              <Img
                src={p.gallery?.data[0]?.attributes?.url}
                title={p.title}
              />
              )
            : (
              <Image
                width={600}
                height={600}
                src='/placeholder.png'
                alt={p.title}
                className='aspect-square object-contain mx-auto'
              />
              )}
          <div className='space-y-1'>
            <div className='text-xs md:text-sm'>
              <span className='p-1 bg-gray-100 inline-block'>SKU: {p.sku}</span>
            </div>
            <h1 className='text-2xl font-semibold'>{p.title}</h1>
          </div>
          <p className='text-xl font-semibold'>${p.price ?? 0}</p>
          <p className='text-slate-700'>{p.Description}</p>
        </div>
        <AddToCart product={{ id, ...p }} />
      </div>
    </div>
  )
}
