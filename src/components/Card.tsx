import { useState } from "react";
import { Products } from "../definitions/definitions";
import classNames from "classnames";
import { useShoppingCart } from "../store/addToCardStore";

function CardProduct(products: Products) {

    const [isHovered, setIsHovered] = useState(false);

    const addItem = useShoppingCart(state => state.addItem)


    const handlerAdd = (product: Products) => () => {
        addItem(product)
    }

    return (

        <div
            className={classNames(
                "w-full sm:w-64 bg-white rounded-lg overflow-hidden",
                "border-2 border-transparent hover:border-gray-300",
                "transition-shadow duration-400 ease-in-out",
                {
                    "hover:scale-105 hover:rotate-2 shadow-lg": !isHovered,
                    "hover:-rotate-1 shadow-xl": isHovered,
                }
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={classNames("relative overflow-hidden", {
                    "group-hover:opacity-75": isHovered,
                })}
            >
                <img
                    className="w-full h-32 object-cover transition-opacity duration-300"
                    src={products.image}
                    alt={products.title}
                />
                <div
                    className={classNames(
                        "absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300",
                        {
                            "opacity-50": isHovered,
                        }
                    )}
                ></div>
            </div>
            <div className="p-4">
                <h3 className="text-gray-900 font-semibold">{products.title}</h3>
                <p className="text-gray-600 mt-2">Category: {products.category}</p>
                <p className="text-gray-600 mt-2">Price: ${products.price}</p>
                <p className="text-gray-600 mt-2">
                    {products.rating.count > 0 ? `In Stock: ${products.rating.count}` : "Out of Stock"}
                </p>
                <button
                    onClick={handlerAdd({
                        id: products.id,
                        title: products.title,
                        price: products.price,
                        description: products.description,
                        category: products.category,
                        image: products.image,
                        rating: products.rating
                    })}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add to Cart
                </button>

            </div>
        </div>
    )

}

export default CardProduct;
