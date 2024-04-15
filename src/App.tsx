
import ListCart from './components/ListCart';
import ListProducts from './components/ListProducts';
import ProductDetail from './components/ProductDetail';
import './index.css'
import { Routes, Route } from "react-router-dom"


function App() {




  return (
    <Routes>
      <Route path="/" element={<ListProducts />} />
      <Route path="list-cart" element={<ListCart />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
