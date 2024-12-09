'use client'
import { useState } from 'react'
import { useProductStore } from '@/lib/store'
import { ShoppingCart, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const AddToCart = ({ product }) => {
  const addProduct = useProductStore(state => state.addProduct)
  const isProductInCart = useProductStore(state => state.isProductInCart)
  const incrementByProductQty = useProductStore(state => state.incrementByProductQty)

  const [qtyError, setQtyError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const STOCK = 30

  const router = useRouter()

  const handleInputChange = (e) => {
    const quantity = parseInt(e.target.value)
    if (quantity <= 0) {
      setQuantity(1)
      setQtyError('Mínimo 1')
    } else if (quantity > STOCK) {
      setQuantity(30)
      setQtyError(`Máximo ${STOCK}`)
    } else {
      setQuantity(quantity)
      setQtyError('')
    }
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
    setQtyError('')
  }
  const handleDecrement = () => {
    setQuantity(prev => prev - 1)
    setQtyError('')
  }

  const handleAddToCart = () => {
    const prod = {
      ...product,
      image: product.gallery?.data ? product.gallery?.data[0]?.attributes?.url : '/placeholder.png',
      quantity,
      stock: STOCK,
      price: product.price ?? 0
    }

    if (isProductInCart(product.id)) {
      incrementByProductQty(product.id, quantity)
    } else {
      addProduct(prod)
    }

    toast(`Se agregó al carrito: ${product.title}.`,
      {
        duration: 10000,
        action: {
          label: 'Ver carrito',
          onClick: () => router.push('/cart')
        }
      }
    )
  }

  return (
    <>
      <div className='flex md:flex-row flex-col gap-2 md:gap-4 md:pt-10 pt-6'>
        <div className='md:flex-none'>
          <div className='flex'>
            <Button disabled={quantity <= 1} onClick={handleDecrement} variant='outline' size='icon' className='flex-none rounded-r-none border-r-0'><Minus className='text-brand-700' /></Button>
            <Input
              value={quantity}
              onChange={handleInputChange}
              type='number'
              min={1}
              max={STOCK}
              className='h-12 md:w-20 text-lg text-center rounded-none border-brand-200 appearance-none z-10'
            />
            <Button disabled={quantity === STOCK} onClick={handleIncrement} variant='outline' size='icon' className='flex-none rounded-l-none border-l-0'><Plus className='text-brand-700' /></Button>
          </div>
          {qtyError && <div className='text-red-600 text-xs pt-1 font-semibold'>{qtyError}</div>}
        </div>
        <Button onClick={handleAddToCart} className='w-full gap-1' size='lg'>
          <ShoppingCart size='24' />
          Agregar al carrito
        </Button>
      </div>
    </>
  )
}
