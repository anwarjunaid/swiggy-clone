import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SearchFood() {
    const [food, setFood] = useState("");
    const [RestData, setRestData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
            async function fetchData() {
                const proxyServer = "https://cors-anywhere.herokuapp.com/";
                const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();
                const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filteredData = tempData?.filter((item) => 'title' in item?.card?.card);
                setRestData(filteredData);
                console.log("Food searched:", filteredData);
            }
            
            fetchData();
        }, []);

    return(
        <div className="w-[50%] mx-auto mt-20">
            <input className="bg-gray-200 pl-10 py-4 w-full rounded-2xl" type="text" placeholder="Search for food..." value={food} onChange={(e) => setFood(e.target.value)} />
        </div>
    )
}