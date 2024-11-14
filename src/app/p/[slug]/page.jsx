import { redirect } from 'next/navigation'
import { getProductBySlug } from '@/app/services/getProductBySlug'
import { Img } from './Img'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default async function Page ({ params }) {
  const STOCK = 30

  const { slug } = params

  const { data } = await getProductBySlug({ slug })
  const { attributes: p } = data[0] || {}

  if (!p) {
    redirect('/')
  }

  return (
    <div className='py-10 px-4'>
      <div className='mx-auto max-w-[600px]'>
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

        <div className='flex md:flex-row flex-col gap-2 md:gap-4 md:pt-10 pt-6'>
          <select className='bg-white border border-gray-300 rounded-md py-2 px-2 h-12 flex-none active:text-red-100'>
            {
              [...Array(STOCK)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'unidad' : 'unidades'}</option>
              ))
            }
          </select>
          <Button className='w-full' size='lg'>Comprar ahora</Button>
        </div>
      </div>
    </div>
  )
}
