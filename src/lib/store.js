import { create } from 'zustand'

export const useProductStore = create((set, get) => ({
  products: [],
  cart: false,
  addProduct: ({ id, title, image, price, quantity, stock }) => set((state) => ({
    products: [
      ...state.products,
      {
        id,
        title,
        image,
        price,
        quantity,
        stock
      }
    ]
  })),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter(item => item.id !== id)
  })),
  updateProductQty: (id, newQty) => set((state) => ({
    products: state.products.map(product =>
      product.id === id ? { ...product, quantity: newQty } : product
    )
  })),
  incrementProductQty: (id) => set((state) => ({
    products: state.products.map(product =>
      product.id === id && product.quantity < product.stock ? { ...product, quantity: product.quantity + 1 } : product
    )
  })),
  isProductInCart: (id) => {
    const { products } = get()
    return products.some(product => product.id === id)
  },
  updateCart: (status) => set(() => ({
    cart: status
  }))
}))
