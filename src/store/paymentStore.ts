import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { payment } from '../definitions/definitions';

type paymentStore = {
    payments: payment[];
    paymentNumber: number;
    addPayment: (payment: payment) => void;
    getPaymentNumber: () => number;
    updatePaymentNumber: (number: number) => void;

}


export const usePaymentStore = create(
    persist<paymentStore>((set, get) => ({
        payments: [],
        paymentNumber: 0,
        addPayment: (payment) => {
            set((state) => ({
                payments: [...state.payments, payment]
            }))

        },
        getPaymentNumber : () => {
            const { paymentNumber } = get();
            return paymentNumber;
        },
        updatePaymentNumber: (number) => {
           set(() =>({
            paymentNumber: number
           })) 
        },
    }), { name: 'storage-payment' }),

)