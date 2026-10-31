import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function RestaurantMenu() {
    const [RestData, setRestData] = useState([]);
    const [selected, setSelected] = useState(null);
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
        }

        fetchData();
    }, []);

    return(
        <div className="w-[48%] mx-auto">
            <div>
                <Link to={`/city/Delhi/${id}/search`}>
                    <p className="mt-20 py-4 text-center rounded-2xl bg-gray-200 text-2xl text-gray-600">Search for dishes</p>
                </Link>
            </div>
            <div className="w-[80%] mt-20">
                <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected === "veg" ? "bg-green-600 text-white" : ""}`} onClick={() => selected==="veg" ? setSelected(null) : setSelected("veg")}>Veg</button>
                <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected === "non-veg" ? "bg-red-700 text-white" : ""}`} onClick={() => selected==="non-veg" ? setSelected(null) : setSelected("non-veg")}>Non-Veg</button>
            </div>
            <div className="h-0.5 mt-10 bg-gray-200"></div>
            <div>
                {
                    RestData.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
                }
            </div>
        </div>
        
    )
}