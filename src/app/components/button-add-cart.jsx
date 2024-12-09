'use client'
import { Button } from '@/components/ui/button'
import { useProductStore } from '@/lib/store'
import { toast } from 'sonner'
import { ShoppingCart } from 'lucide-react'
// import { useRouter } from 'next/navigation'

const ButtonAddCart = ({ product }) => {
  const addProduct = useProductStore(state => state.addProduct)
  const isProductInCart = useProductStore(state => state.isProductInCart)
  const incrementProductQty = useProductStore(state => state.incrementProductQty)

  const { gallery, slug, ...rest } = product

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
    toast.success(`${product.title} se ha agregado al carrito.`)
  }

  return (
    <Button className='w-full gap-1' onClick={handleAddToCart}>
      <ShoppingCart size='18' />
      Agregar al carrito
    </Button>
  )
}

export default ButtonAddCart
