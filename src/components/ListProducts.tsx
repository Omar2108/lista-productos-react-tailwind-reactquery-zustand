
import { useFetchProducts } from '../hooks/useProducts';
import CardProduct from './Card';
import Header from './header';
import Loading from './Loading';

function ListProducts() {

    const { data, isLoading } = useFetchProducts();

    if (isLoading) return <Loading />;

  return (
    <>
    <Header />
    <div className="flex justify-center my-14 items-center bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          data?.map((product) => (
            <CardProduct
              category={product.category}
              image={product.image}
              description={product.description}
              price={product.price}
              rating={product.rating}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          ))
        }
      </div>
    </div>
  </>
  )
}

export default ListProducts