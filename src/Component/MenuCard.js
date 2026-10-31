import RestInfo from "./RestInfo";
import { useState } from "react";

export default function MenuCard({menuItems, foodSelected}) {
    const[isOpen,setIsOpen] = useState(true);

    let itemCount;

    if (foodSelected === "veg") {
        itemCount = menuItems?.itemCards?.filter(
            (item) => "isVeg" in item?.card?.info
        ).length;
    } else if (foodSelected === "non-veg") {
        itemCount = menuItems?.itemCards?.filter(
            (item) =>  !("isVeg" in item?.card?.info)
        ).length;
    } else {
        itemCount = menuItems?.itemCards?.length;
    }

    if(!isOpen){
        return(
            <div className="mt-10 flex justify-between w-full">
                <p className="text-2xl font-bold mb-4">{menuItems?.title} ({itemCount})</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '⌃' : '⌄'}</button>
            </div>
        )
    }

    // categories
      if("categories" in menuItems){
        return(
            <div className="w-full mt-20">
                <div className="h-0.5 mb-4 bg-gray-200 w-50"></div>
                <p className="text-3xl font-bold italic">{menuItems?.title}</p>
                <div className="h-0.5 mt-4 bg-gray-200 w-50"></div>        
                <div>
                    {
                        menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>)
                    }
                </div>
            </div>
        );
    }

     //Veg filter
    if(foodSelected === "veg"){
        if(itemCount === 0) console.log("No veg items found");
        return(
            <div className="w-full mt-10">
                <div className="flex justify-between w-full">
                        <p className="text-2xl font-bold mb-4">{menuItems?.title} ({itemCount})</p>
                        <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '⌃' : '⌄'}</button>
                </div>
                <div>            
                        {
                            menuItems?.itemCards?.filter((food) => "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                        }
                </div>
            </div>
        );
    }

    //Non-Veg filter
    if(foodSelected === "non-veg"){
        return(
            <div className="w-full mt-10">
                <div className="flex justify-between w-full">
                        <p className="text-2xl font-bold mb-4">{menuItems?.title} ({itemCount})</p>
                        <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '⌃' : '⌄'}</button>
                </div>
                <div>            
                        {
                            menuItems?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                        }
                </div>
            </div>
        );
    }
   

    return(
        <div className="w-full mt-10">
            <div className="flex justify-between w-full">
                    <p className="text-2xl font-bold mb-4">{menuItems?.title} ({menuItems?.itemCards?.length})</p>
                    <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '⌃' : '⌄'}</button>
            </div>
            <div>            
                    {
                        menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                    }
            </div>
        </div>
    );
} 