
import ListCart from './components/ListCart';
import ListProducts from './components/ListProducts';
import './index.css'
import { Routes, Route } from "react-router-dom"


function App() {




  return (
    <Routes>
      <Route path="/" element={<ListProducts />} />
      <Route path="list-cart" element={<ListCart />} />
    </Routes>
  )
}

export default App
