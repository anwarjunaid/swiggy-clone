import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addItem,increaseItem,decreaseItem} from "../Stores/CartSlicer";

export default function RestInfo({restData}) {
    const[isMore,setIsMore] = useState(false);
    const dispatch = useDispatch();

    const items = useSelector(state => state.CartSlice.items);
    const element = items.find(item => item.id === restData.id);
    const count = element ? element.quantity : 0; 

    function handleAddItem(){
        dispatch(addItem(restData));
    }

    function handleIncreaseItem(){
        dispatch(increaseItem(restData));
    }

    function handleDecreaseItem(){
        dispatch(decreaseItem(restData));
    }

    
   
    return(
        <>
        <div className="w-full flex justify-between mt-6">
            <div className="w-[65%]">
                <p className="text-lg text-gray-800 mb-1">{restData?.name}</p>
                <p>₹{(restData?.price ?? restData?.defaultPrice) / 100}</p>
                <span className="text-green-800 font-bold">{restData?.ratings?.aggregatedRating?.rating} </span>
                {restData?.ratings?.aggregatedRating?.rating && 
                    <span className="text-gray-600">({restData?.ratings?.aggregatedRating?.ratingCountV2})</span>
                }
                <div className="text-gray-600 mt-2">
                    <p className={`text-justify ${!isMore ? "line-clamp-2" : ""}`}>
                        {restData?.description}
                    </p>

                    <button
                        className="text-green-700 font-semibold"
                        onClick={() => setIsMore(!isMore)}
                    >
                        {isMore ? "less" : "more"}
                    </button>
                </div>
                
            </div>
            
            <div className="w-[20%] relative">
                <img className="w-39 h-36 object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restData?.imageId}`} alt={restData?.name}></img>
                
                
                
                {/* <button className="absolute top-28 left-5 bg-white text-green-700 w-30 h-10 shadow-md rounded-lg mt-2 ">Add</button> */}
                
                {count === 0 ? (
                    <button className="absolute top-28 left-5 bg-white text-green-700 w-30 h-10 shadow-md rounded-lg mt-2" onClick={handleAddItem}>Add</button>
                ) : (
                    <div className="absolute top-28 left-5 bg-white text-green-700 w-30 h-10 shadow-md rounded-lg mt-2 flex justify-around items-center">
                        <button className="text-lg font-bold" onClick={handleDecreaseItem}>−</button>
                        <p className="text-lg font-bold">{count}</p>
                        <button className="text-2xl font-bold" onClick={handleIncreaseItem}>+</button>
                    </div>
                )}
                
                
                
                <p className="text-gray-500 text-sm absolute top-41 left-10">Customizable</p>
            </div>
        </div>
        <div className="h-0.5 mt-15 bg-gray-200"></div>
        </>
    )
}