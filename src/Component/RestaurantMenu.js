import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

export default function RestaurantMenu() {
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
        }

        fetchData();
    }, []);

    return(
        <div className="w-[80%] mx-auto">
            {
                RestData.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
            }
        </div>
        
    )
}