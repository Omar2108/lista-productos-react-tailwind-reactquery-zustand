import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Products } from "../definitions/definitions";

type stateProducts = {
    products: Products[],
    updateProducts: (products:Products[]) => void
}

export const useStoreProducts = create(
    persist<stateProducts>((set) => ({
       products: [],
       updateProducts: (products:Products[])=>{
        set(()=>({products: products}))
       }
    }), { name: 'storage-products' })
)