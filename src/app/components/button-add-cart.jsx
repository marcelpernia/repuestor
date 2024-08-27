import { Button } from '@/components/ui/button';
import CartPlus from './cart-plus';
import { useProductStore } from '@/lib/store';
import { useRouter } from 'next/navigation'

const ButtonAddCart = ({ product }) => {
  const addProduct = useProductStore(state => state.addProduct)
  const isProductInCart = useProductStore(state => state.isProductInCart)
  const incrementProductQty = useProductStore(state => state.incrementProductQty)
  const updateCart = useProductStore(state => state.updateCart)

  const router = useRouter()

  const { gallery, slug, ...rest } = product
  
  const handleAddCart = () => {
    const prod = {
      ...rest,
      image: product.gallery?.data ? product.gallery?.data[0]?.attributes?.url : '/placeholder.png',
      quantity: 1,
      stock: 10,
      price: product.price ?? 0
    }

    if(isProductInCart(product.id)) {
      incrementProductQty(product.id)
    } else {
      addProduct(prod)
    }

    updateCart(true)
    // router.refresh()
  }

  return (
    <Button size='icon' onClick={handleAddCart}><CartPlus className='w-6 text-white' /></Button>
  );
}

export default ButtonAddCart;
