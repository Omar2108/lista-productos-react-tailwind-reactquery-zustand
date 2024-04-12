import { Link } from "react-router-dom"



function HeaderCart() {
  return (
    <header className="bg-gray-200 p-4">
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Products
      </Link>
    </header>
  )
}

export default HeaderCart