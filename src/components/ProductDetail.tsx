import { useParams } from 'react-router-dom';
import { useStoreProducts } from '../store/productsStore';
import { useShoppingCart } from '../store/addToCardStore';
import { Products } from '../definitions/definitions';
import Header from './header';

function ProductDetail() {

  const { id } = useParams();
  const products = useStoreProducts(state => state.products);
  const addItem = useShoppingCart(state => state.addItem)

  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handlerAdd = (product: Products) => () => {
    addItem(product)
  }




  return (
    <>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.title}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.category}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">

                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{product.rating.rate}</p>
                  <span className="text-gray-600 ml-3">{product.rating.count} Reviews</span>
                </span>

              </div>
              <p className="leading-relaxed">{product.description}</p>

              <div className="flex mt-10 mb-20">
                <h3 className="title-font font-medium text-2xl text-gray-900">Price: $ {product.price}
                </h3>

              </div>
              <div className="flex">
                <button onClick={handlerAdd({
                  title: product.title,
                  category: product.category,
                  description: product.category,
                  id: product.id,
                  image: product.image,
                  price: product.price,
                  rating: product.rating
                })} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Cart</button>
                <a href='/' className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail