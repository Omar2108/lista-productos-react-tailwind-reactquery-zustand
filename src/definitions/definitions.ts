export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}
export interface Rating {
    rate: number;
    count: number;
}

export interface CartItem {
    product: Products
    quantity: number
  }
  
  export interface ShoppingCart {
    items: CartItem[]
    addItem: (product: Products, quantity?: number) => void
    removeItem: (productId: number) => void
    increaseQuantity: (productId: number, quantity?: number) => void
    decreaseQuantity: (productId: number, quantity?: number) => void
    getTotalPrice: () => number
    clearCart: () => void
  }

  export interface payment {
    numberPayment: number;
    totalPayment: number;
    paymentMethod: string;
    products: CartItem[];
    datePayment: string;

  }

  export interface PaymentModalProps {
    onClose: () => void;
}