
import { useShoppingCart } from '../store/addToCardStore'
import CardProductCart from './CardProductCart'
import CartEmpetyProduct from './CartEmpetyProduct'
import HeaderCart from './HeaderCart'
import TotalCartProducts from './TotalCartProducts'



function ListCart() {


    const items = useShoppingCart(state => state.items)

    return (

        <>

            <HeaderCart />
            {items.length === 0 && <CartEmpetyProduct />}

            <div className="grid grid-cols-2 gap-4">
                {items.length > 0 && items.map(item => (
                    <CardProductCart 
                    product={item.product}
                    quantity={item.quantity}
                    key={item.product.id}
                    />
                ))}
            </div>

            {items.length > 0 && <TotalCartProducts  />}

        </>


    )
}

export default ListCart