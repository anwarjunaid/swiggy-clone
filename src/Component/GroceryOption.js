import { GroceryGridCards } from "../utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    return(
        <div className="w-[80%] container mx-auto mt-20">
            <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-10 gap-10">
                {
                    GroceryGridCards.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
                }
            </div>
        </div>
    )
}
