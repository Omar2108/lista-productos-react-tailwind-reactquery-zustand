import { create } from 'zustand'
import { ShoppingCart } from '../definitions/definitions';
import { persist } from 'zustand/middleware';


export const useShoppingCart = create(
    persist<ShoppingCart>((set, get) => ({
        items: [],
        addItem: (product, quantity = 1) => {
            set({ items: [{ product, quantity }] })
        },
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
        clearCart: () => set({ items: [] }),
    }), { name: 'storage-shoppingCart' })
);

