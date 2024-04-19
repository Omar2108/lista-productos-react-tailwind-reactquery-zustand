import { useState } from "react";
import { useShoppingCart } from "../store/addToCardStore"
import PaymentModal from "./PaymentModal";


function TotalCartProducts() {

  const [showModal, setShowModal] = useState(false);
 

  const clearCart = useShoppingCart(state => state.clearCart)
  const getTotalPrice = useShoppingCart(state => state.getTotalPrice)

  const handlerModalclose = ()=>{
    setShowModal(false)
}


  const handlerClearCart = () => {
    clearCart()
  }
  return (
    <div className="bg-gray-200 p-4 my-8">
      <h2 className="text-xl font-bold">Total:</h2>
      <p className="text-2xl font-bold text-gray-900">${getTotalPrice()}</p>
      <div className="mt-4">
        <button onClick={() => setShowModal(true)} className="bg-green-500 text-white p-2">Buy All</button>
        <button onClick={handlerClearCart} className="bg-red-500 text-white p-2">Clear Cart</button>
      </div>

      {showModal && <PaymentModal onClose={handlerModalclose} />}
    </div>
  )
}

export default TotalCartProducts