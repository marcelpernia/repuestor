'use client'
import { Button } from '@/components/ui/button'
import { useProductStore } from '@/lib/store'
import { toast } from 'sonner'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ButtonAddCart = ({ product }) => {
  const addProduct = useProductStore(state => state.addProduct)
  const isProductInCart = useProductStore(state => state.isProductInCart)
  const incrementProductQty = useProductStore(state => state.incrementProductQty)

  const { gallery, slug, ...rest } = product

  const router = useRouter()

  const handleAddToCart = () => {
    const prod = {
      ...rest,
      image: product.gallery?.data ? product.gallery?.data[0]?.attributes?.url : '/placeholder.png',
      quantity: 1,
      stock: 10,
      price: product.price ?? 0
    }

    if (isProductInCart(product.id)) {
      incrementProductQty(product.id)
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
    <Button className='w-full gap-1' onClick={handleAddToCart}>
      <ShoppingCart size='18' />
      Agregar al carrito
    </Button>
  )
}

export default ButtonAddCart
