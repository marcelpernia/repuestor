import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { STOCK } from '@/lib/constants'
import { Plus, Minus } from 'lucide-react'

const InputEditQty = ({ quantity, setQuantity }) => {
  const [qtyError, setQtyError] = useState('')

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

  return (
    <div className='md:flex-none'>
      <div className='flex'>
        <Button disabled={quantity <= 1} onClick={handleDecrement} variant='outline' size='lgIcon' className='flex-none rounded-r-none border-r-0'><Minus className='text-brand-700' /></Button>
        <Input
          value={quantity}
          onChange={handleInputChange}
          type='number'
          min={1}
          max={STOCK}
          className='h-12 md:w-20 text-lg text-center rounded-none border-brand-200 appearance-none z-10'
        />
        <Button disabled={quantity === STOCK} onClick={handleIncrement} variant='outline' size='lgIcon' className='flex-none rounded-l-none border-l-0'><Plus className='text-brand-700' /></Button>
      </div>
      {qtyError && <div className='text-red-600 text-xs pt-1 font-semibold'>{qtyError}</div>}
    </div>
  )
}

export default InputEditQty
