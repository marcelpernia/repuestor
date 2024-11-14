import { Button } from '@/components/ui/button';
import CartPlus from './cart-plus';
import { useProductStore } from '@/lib/store';
import { toast } from "sonner"
// import { useRouter } from 'next/navigation'

const ButtonAddCart = ({ product }) => {
  const addProduct = useProductStore(state => state.addProduct)
  const isProductInCart = useProductStore(state => state.isProductInCart)
  const incrementProductQty = useProductStore(state => state.incrementProductQty)

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
    toast.success(`${product.title} se ha agregado al carrito.`)
  }

  return (
    <Button size='icon' onClick={handleAddCart}><CartPlus className='w-6 text-white' /></Button>
  );
}

export default ButtonAddCart;
