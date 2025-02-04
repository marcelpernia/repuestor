import React from 'react'

export const metadata = {
  title: 'Carrito de compras',
  description: 'Carrito de compras de la tienda en línea'
}

const Layout = ({ children }) => {
  return (
    <div className='bg-slate-50 py-10 px-4 h-full'>
      <div className='max-w-[800px] mx-auto'>
        <div className='space-y-4'>
          <h1 className='text-2xl font-semibold'>Su Carrito</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
