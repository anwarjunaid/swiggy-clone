import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){
    return(
        <div className="container mx-auto mt-20">
            <p className="text-2xl font-bold mt-20">Order our best food options</p>
            <div className="flex flex-wrap justify-between mt-10 gap-x-10">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                }
            </div>
        </div>
    )
}
