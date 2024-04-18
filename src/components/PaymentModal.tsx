import { useEffect, useState } from 'react'
import { useShoppingCart } from '../store/addToCardStore';
import { usePaymentStore } from '../store/paymentStore';
import { CartItem } from '../definitions/definitions';


interface PaymentModalProps {
    onClose: () => void;
}

const PaymentModal = ({ onClose }: PaymentModalProps) => {

    const [paymentMethod, setPaymentMethod] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState<CartItem[]>([]);

    const [paymentStatus, setPaymentStatus] = useState('');
    const products = useShoppingCart(state => state.items);
    const clearCart = useShoppingCart(state => state.clearCart);
    const getTotalPrice = useShoppingCart(state => state.getTotalPrice);
    const updateQuantity = useShoppingCart(state => state.updateQuantity);
    const removeFromCart = useShoppingCart(state => state.removeItem);
    const getPaymentNumber = usePaymentStore(state => state.getPaymentNumber)
    const updatePaymentNumber = usePaymentStore(state => state.updatePaymentNumber)
    const addPayment = usePaymentStore(state => state.addPayment);

    useEffect(() => {
        const totalPrice = products.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        setTotalPrice(totalPrice);
        setItems(products);
    }, [products]);

    const handleRemove = (productId: number) => {
        removeFromCart(productId);
    };


    const handleChangeQuantity = (productId: number, quantity: number) => {
        updateQuantity(productId, quantity);
    };

    const handlePayment = () => {

        let date = new Date();
        date.getDate()

        setTimeout(() => {
            addPayment({
                datePayment: date.toLocaleDateString().toString(),
                paymentMethod: paymentMethod,
                numberPayment: getPaymentNumber() + 1,
                products: products,
                totalPayment: getTotalPrice()
            })
            updatePaymentNumber(getPaymentNumber() + 1)
            setPaymentStatus('success');
            clearCart();
            setPaymentStatus('');
            onClose();
        }, 2000);
    };


    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-full md:w-[620px] h-auto md:h-[400px]">
                <h2 className="text-xl font-bold mb-4">Total a Pagar: ${totalPrice}</h2>
                <table className="w-full h-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Precio Producto</th>
                            <th className="border border-gray-300 px-4 py-2">Precio Unitario</th>
                            <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                            <th className="border border-gray-300 px-4 py-2">Total por Producto</th>
                            <th className="border border-gray-300 px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            items.map(item => {
                                return (

                                    <>
                                        <tr key={item.product.id} className="text-center">
                                            <td className="border border-gray-300 px-4 py-2">${item.product.title}</td><td className="border border-gray-300 px-4 py-2">${item.product.price}</td><td className="border border-gray-300 px-4 py-2">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => handleChangeQuantity(item.product.id, parseInt(e.target.value))}
                                                    className="w-16 px-2 py-1 border border-gray-300 rounded" />
                                            </td><td className="border border-gray-300 px-4 py-2">${item.product.price * item.quantity}</td><td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    onClick={() => handleRemove(item.product.id)}
                                                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </>

                                )
                            })
                        }

                    </tbody>
                </table>
                {paymentStatus && (
                    <div className={`mt-4 ${paymentStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {paymentStatus === 'success' ? 'Pago realizado con éxito.' : 'Error al procesar el pago.'}
                    </div>
                )}
                <div className="mt-4">
                    <select className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta de Crédito</option>
                        <option value="pasarela">Tarjeta de Debido</option>
                        <option value="transferencia">Transferencia Bancaria</option>
                    </select>
                </div>
                <div className="mt-4">
                    <button
                        onClick={handlePayment}
                        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Buy
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full mt-2 p-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal