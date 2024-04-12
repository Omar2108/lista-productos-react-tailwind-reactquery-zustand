import { Link } from "react-router-dom"


function CartEmpetyProduct() {
  return (
    <div className="bg-gray-200 p-4 text-center">
      <p className="text-gray-600">There are no products added to the cart</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Add products
      </Link>
    </div>
  )
}

export default CartEmpetyProduct