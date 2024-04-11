import { create } from 'zustand'
import { Products } from '../definitions/definitions';
import { persist } from 'zustand/middleware';


type CardState = {
    cart: Products[];
    addToCart: (product: Products) => void;
}

export const useStoreCard = create(
    persist<CardState>((set) => ({
            cart: [],
            addToCart: (product) =>
                set((state) => ({ cart: [...state.cart, product] })),
    }), { name: 'storage-card' })
);