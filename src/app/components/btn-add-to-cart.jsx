'use client'
import { useState, useEffect } from 'react'
import { useProductStore } from '@/lib/store'
import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { STOCK } from '@/lib/constants'

export const BtnAddToCart = ({ product }) => {
  const products = useProductStore(state => state.products)
  const removeProduct = useProductStore(state => state.removeProduct)
  const addProduct = useProductStore(state => state.addProduct)
  const updateProductQty = useProductStore(state => state.updateProductQty)
  const incrementProductQty = useProductStore(state => state.incrementProductQty)
  const decrementProductQty = useProductStore(state => state.decrementProductQty)
  const [current, setCurrent] = useState({})
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const findProduct = products.find(item => item.id === product.id)
    setCurrent(findProduct)
    return () => {

    }
  }, [products])

  const handleInputChange = (e) => {
    const quantity = parseInt(e.target.value)
    if (quantity > STOCK) {
      updateProductQty(product.id, STOCK)
      setError(`Máx. ${STOCK}`)
    } else if (quantity === 0) {
      removeProduct(product.id)
    } else {
      updateProductQty(product.id, quantity)
      setError('')
    }
  }

  const handleIncrement = () => {
    incrementProductQty(product.id)
  }
  const handleDecrement = () => {
    if (current.quantity === 1) {
      removeProduct(product.id)
    } else {
      decrementProductQty(product.id)
      error && setError('')
    }
  }

  const handleAddToCart = () => {
    const prod = {
      ...product,
      image: product.gallery?.data ? product.gallery?.data[0]?.attributes?.url : '/placeholder.png',
      quantity: 1,
      stock: STOCK,
      price: product.price ?? 0
    }
    addProduct(prod)

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

  if (current) {
    return (
      <>
        <div>
          <div className='flex'>
            <Button onClick={handleDecrement} variant='outline' size='smIcon' className='flex-none rounded-r-none border-r-0'><Minus className='text-brand-700' /></Button>
            <div className='w-full relative'>
              {error
                ? (
                  <Input
                    value={error}
                    type='text'
                    readOnly
                    onFocus={() => setError('')}
                    className='text-lg h-9 text-center rounded-none border-brand-200 appearance-none z-10'
                  />
                  )
                : (
                  <Input
                    value={current.quantity}
                    onChange={handleInputChange}
                    type='number'
                    min={0}
                    max={STOCK}
                    className='text-lg h-9 text-center rounded-none border-brand-200 appearance-none z-10'
                  />
                  )}
            </div>
            <Button disabled={current.quantity === STOCK} onClick={handleIncrement} variant='outline' size='smIcon' className='flex-none rounded-l-none border-l-0'><Plus className='text-brand-700' /></Button>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <Button onClick={handleAddToCart} className='w-full gap-1' size='sm'>
        <Plus size='18' />
        Agregar al carrito
      </Button>
    )
  }
}
