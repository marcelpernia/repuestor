import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useProductStore = create(
  persist(
    (set, get) => ({
      products: [],
      cart: false,

      addProduct: ({ id, title, image, price, quantity, stock }) =>
        set((state) => ({
          products: [
            ...state.products,
            { id, title, image, price, quantity, stock }
          ]
        })),

      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((item) => item.id !== id)
        })),

      updateProductQty: (id, newQty) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, quantity: newQty } : product
          )
        })),

      incrementProductQty: (id) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id && product.quantity < product.stock
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        })),

      incrementByProductQty: (id, add) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id && (product.quantity + add) < product.stock
              ? { ...product, quantity: product.quantity + add }
              : { ...product, quantity: product.stock }
          )
        })),

      isProductInCart: (id) => {
        const { products } = get()
        return products.some((product) => product.id === id)
      },

      updateCart: (status) =>
        set(() => ({
          cart: status
        }))
    }),
    {
      name: 'productStore'
    }
  )
)
