import RestInfo from "./RestInfo";
import { useState } from "react";

export default function MenuCard({menuItems}) {
    const[isOpen,setIsOpen] = useState(true);

    if("categories" in menuItems){
        return(
            <div className="w-full mt-10">
                <p className="text-2xl font-bold">{menuItems?.title}</p>
                <div className="h-0.5 mt-4 bg-gray-200 w-50"></div>        
                <div>
                    {
                        menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items}></MenuCard>)
                    }
                </div>
            </div>
        );
    }

    if(!isOpen){
        return(
            <div className="mt-10 flex justify-between w-full">
                <p className="text-2xl font-bold mb-4">{menuItems?.title} ({menuItems?.itemCards?.length})</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '⌃' : '⌵'}</button>
            </div>
        )
    }

    return(
        <div className="w-full mt-10">
            <div className="flex justify-between w-full">
                <p className="text-2xl font-bold mb-4">{menuItems?.title} ({menuItems?.itemCards?.length})</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen ? '⌃' : '⌵'}</button>
            </div>
            <div>            
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
        </div>
    );
} 