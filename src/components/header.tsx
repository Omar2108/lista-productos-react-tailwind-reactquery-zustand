import { useShoppingCart } from "../store/addToCardStore";
import shopping from '../assets/shopping-cart.svg';

function Header() {

    const items = useShoppingCart(state => state.items)
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Company</span>
                    </a>
                </div>

                <div className="lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                            Product

                        </button>
                    </div>

                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="/list-cart"
                        className="relative my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-zinc-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                        data-twe-toggle="pill"
                        data-twe-target="#tabs-notifications"
                        role="tab"
                        aria-controls="tabs-notifications"
                        aria-selected="false"
                    ><img src={shopping} alt="shopping-cart"  />
                        <div
                            className="absolute bottom-auto left-auto right-0 top-0 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                            {items.length ? items.length : 0}
                        </div>
                        </a>
                </div>
            </nav>

          
        </header>

    )

}

export default Header;