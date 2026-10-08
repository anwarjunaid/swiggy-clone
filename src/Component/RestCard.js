import {Link} from "react-router";

export default function RestCard({restInfo}){
    return (
        <Link to={`/city/Delhi/${restInfo?.info?.id}`}>
            <div className="w-80 object-cover transform transition duration-200 hover:scale-95 hover:shadow-lg rounded-xl">
                <img className="w-80 h-50 object-cover rounded-xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${restInfo.info.cloudinaryImageId}`}/>
                <div className="w-[95%] mx-auto mt-3">
                    <div className="font-bold text-xl">{restInfo.info.name}</div>
                    <div className="flex gap-2">
                        <svg className="w-6 h-6 fill-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <span>{restInfo.info.avgRating} • </span>
                        <span className="font-semibold">{restInfo.info.sla.slaString}</span>
                    </div>
                    <div className="text-gray-700 truncate">{restInfo.info.cuisines.join(", ")}</div>
                    <div className="text-gray-700 mb-2">{restInfo.info.areaName}</div>
                </div>
            </div>
        </Link>
    )
}