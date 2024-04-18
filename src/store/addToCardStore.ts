import { create } from 'zustand'
import { Products } from '../definitions/definitions';
import { persist } from 'zustand/middleware';

type CartItem = {
    product: Products
    quantity: number
}

type ShoppingCart = {
    items: CartItem[]
    addItem: (product: Products, quantity?: number) => void
    removeItem: (productId: number) => void
    increaseQuantity: (productId: number, quantity?: number) => void
    decreaseQuantity: (productId: number, quantity?: number) => void
    getTotalPrice: () => number
    updateQuantity: (productId: number, quantity?: number) => void
    setPaymentMethod: (method: string) => void
    paymentMethod?: string
    clearCart: () => void
}


export const useShoppingCart = create(
    persist<ShoppingCart>((set, get) => ({
        items: [],
        addItem: (product, quantity = 1) =>
            set((state) => ({ 
                items: [...state.items, { product: product, quantity: quantity }] 
            })),
        removeItem: productId => {
            const { items } = get()

            set({ items: items.filter(item => item.product.id !== productId) })
        },
        increaseQuantity: (productId, quantity = 1) => {
            const { items } = get()

            const newItems = structuredClone(items)
            const itemIndex = newItems.findIndex(item => item.product.id === productId)
            const itemData = newItems[itemIndex]

            newItems[itemIndex] = { ...itemData, quantity: itemData.quantity + quantity }

            set({ items: newItems })
        },
        decreaseQuantity: (productId, quantity = 1) => {
            const { items } = get()

            const newItems = structuredClone(items)
            const itemIndex = newItems.findIndex(item => item.product.id === productId)
            const itemData = newItems[itemIndex]

            const newQuantity = itemData.quantity !== 1 ? itemData.quantity - quantity : quantity

            newItems[itemIndex] = { ...itemData, quantity: newQuantity }

            set({ items: newItems })
        },
        getTotalPrice: () => {
            const { items } = get()

            return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
        },
        updateQuantity:  (productId, quantity = 1) => {
            const { items } = get()

            const newItems = structuredClone(items)
            const itemIndex = newItems.findIndex(item => item.product.id === productId)
            const itemData = newItems[itemIndex]

            newItems[itemIndex] = { ...itemData, quantity: quantity }

            set({ items: newItems })
        },
        setPaymentMethod: (method) => set(() => ({ paymentMethod: method })),
        clearCart: () => set({ items: [] }),
    }), { name: 'storage-shoppingCart' })
);

