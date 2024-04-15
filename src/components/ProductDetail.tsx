import { Link, useParams } from 'react-router-dom';
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
      <div className='flex items-center justify-center w-full'>
        <div className="bg-white w-[720px] h-[650] ">

          <div className="w-full mx-auto mt-6 max-w-xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center" />
            </div>
          </div>


          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">Price: $ {product.price}</p>

              <div className="mt-6">
                <h3 className="not-sr-only">Reviews</h3>
                <div className="flex items-center">

                  <p className="not-sr-only">{product.rating.rate} out of 5 stars</p>
                  <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{product.rating.count} Reviews</a>
                </div>
              </div>

            </div >
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Category</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.category}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Decription</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>

          </div>



          <button onClick={handlerAdd({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product.rating
          })} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to cart</button>

          <Link to="/" className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Go back</Link>

        </div>
      </div>
    </>
  )
}

export default ProductDetail