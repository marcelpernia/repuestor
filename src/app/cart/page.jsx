'use client'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useProductStore } from '@/lib/store'
import { useShallow } from 'zustand/react/shallow'
import { BtnAddToCart } from '../components/btn-add-to-cart'
import Link from 'next/link'

export default function PageCart () {
  const products = useProductStore(useShallow(state => state.products))

  return (
    <div className='bg-slate-50 py-10 px-4 h-full'>
      <div className='max-w-[800px] mx-auto'>
        <div className='space-y-4'>
          <h1 className='text-2xl font-semibold'>Su Carrito</h1>
          <pre><code>{JSON.stringify(products, null, 2)}</code></pre>
          <div className='bg-white shadow-lg p-4 rounded-xl border-gray-100'>
            <Table>
              <TableHeader>
                <TableRow className='hover:bg-transparent'>
                  <TableHead>Producto</TableHead>
                  <TableHead>Cant.</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className='hover:bg-transparent'>
                    <TableCell>
                      <div className='flex gap-4 items-center'>
                        <Link href={`/p/${product.slug}`} className='md:text-base text-sm line-clamp-1 hover:underline' title={product.title}>
                          <img
                            src={product.image}
                            alt='Producto 1'
                            className='w-20 h-20 object-contain rounded flex-none'
                          />
                        </Link>
                        <div className='w-full space-y-1'>
                          <h3 className='text-balance font-bold leading-none text-base'>{product.title}</h3>
                          <ul className='text-slate-600 text-xs'>
                            <li>Precio: {'$'}{product.price}</li>
                            <li>SKU: {product.sku}</li>
                          </ul>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className='w-[180px] text-center'>
                      <BtnAddToCart product={{ id: product.id, ...product }} />
                    </TableCell>
                    <TableCell className='font-semibold w-0'>{'$'}{product.price * product.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className='flex justify-end'>
            <Button>Tramitar pedido</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
