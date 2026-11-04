import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {
    const cartItemCount = useSelector(store => store.CartSlice.count);

    return(
        <div className="container mx-auto py-4 px-8 bg-gray-100 text-4xl flex justify-between items-center">
            <div>
                <h1 className="text-orange-500 font-bold">Swiggy</h1>
            </div>
            <div>
                <Link to="/checkout">
                    Cart has {cartItemCount} items
                </Link>
            </div>
        </div>
    )
}