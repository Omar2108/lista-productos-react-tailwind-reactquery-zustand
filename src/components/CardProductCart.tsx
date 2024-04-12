import { CartItem } from '../definitions/definitions';
import { useShoppingCart } from '../store/addToCardStore';

function CardProductCart(item: CartItem) {

    const increaseQuantity = useShoppingCart(state => state.increaseQuantity)
    const decreaseQuantity = useShoppingCart(state => state.decreaseQuantity)
    const removeItem = useShoppingCart(state => state.removeItem)



    const handlerRemove = (id: number) => () => {
        removeItem(id)
    }

    const handlerIncreaseQuantity = (id: number) => () => {
        increaseQuantity(id)
    }

    const handlerDecreaseQuantity = (id: number) => () => {
        decreaseQuantity(id)
    }


    return (
        <>
            <div className="bg-gray-200 p-4">
                <img
                    className="w-full h-32 object-cover transition-opacity duration-300"
                    src={item.product.image}
                    alt={item.product.title}
                />
                <h3 className="text-xl font-bold">{item.product.title}</h3>
                <p className="text-gray-700">{item.product.price}</p>

                <button onClick={handlerDecreaseQuantity(item.product.id)} className="bg-gray-300 text-gray-600 px-4 py-2 rounded-l">-</button>
                <input className="w-16 text-center border" type="number" value={item.quantity} min="1"></input>
                <button onClick={handlerIncreaseQuantity(item.product.id)} className="bg-gray-300 text-gray-600 px-4 py-2 rounded-r">+</button>

                <p className="text-xl font-bold text-gray-800">Total: ${item.quantity * item.product.price}</p>
                <button className="bg-blue-500 text-white p-2">Buy</button>
                <button onClick={handlerRemove(item.product.id)} className="bg-red-500 text-white p-2">Remove product</button>
            </div>
        </>
    )
}

export default CardProductCart