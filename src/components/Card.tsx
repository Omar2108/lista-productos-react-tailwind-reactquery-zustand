import { Products } from "../definitions/definitions";

function Card(products: Products) {

    return (

        <div className="w-full relative group">
            <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
                <div>
                    <img className="w-full h-full" src={products.image} />
                </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                <div className="flex items-center justify-between font-titleFont">
                    <h2 className="text-lg text-primeColor font-bold">
                        {products.title}
                    </h2>
                    <p className="text-[#767676] text-[14px]">${products.price}</p>
                </div>
                <div>
                    <p className="text-[#767676] text-[14px]">{products.category}</p>
                </div>
            </div>
        </div>
    )

}

export default Card;
