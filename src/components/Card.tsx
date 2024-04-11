import { useState } from "react";
import { Products } from "../definitions/definitions";
import classNames from "classnames";

function Card(products: Products) {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <div
        className={classNames(
          "w-full sm:w-64 bg-white shadow-lg rounded-lg overflow-hidden",
          {
            "hover:shadow-xl transition duration-300": !isHovered,
            "transform scale-105": isHovered,
          }
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-full h-32 object-cover"
          src={products.image}
          alt={products.title}
        />
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold">{products.title}</h3>
          <p className="text-gray-600 mt-2">Category: {products.category}</p>
          <p className="text-gray-600 mt-2">Price: ${products.price}</p>
          <p className="text-gray-600 mt-2">
            {products.rating.count > 0 ? `In Stock: ${products.rating.count}` : "Out of Stock"}
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
        </div>
      </div>
    )

}

export default Card;
