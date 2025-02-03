'use client'
import { useState } from 'react'
import { useProductStore } from '@/lib/store'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { STOCK } from '@/lib/constants'
import InputEditQty from '@/app/components/input-edit-qty'

export const AddToCart = ({ product }) => {
  const addProduct = useProductStore(state => state.addProduct)
  const isProductInCart = useProductStore(state => state.isProductInCart)
  const incrementByProductQty = useProductStore(state => state.incrementByProductQty)

  const [quantity, setQuantity] = useState(1)

  const router = useRouter()

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
        <InputEditQty
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Button onClick={handleAddToCart} className='w-full gap-1' size='lg'>
          <ShoppingCart size='24' />
          Agregar al carrito
        </Button>
      </div>
    </>
  )
}
