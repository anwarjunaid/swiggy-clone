import ReactDom from "react-dom/client";
import Header from "./Component/Header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";
import DineOption from "./Component/DineOption";
import Restaurant from "./Component/Restaurant";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Component/Home";
import RestaurantMenu from "./Component/RestaurantMenu";

function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/restaurants" element={<Restaurant/>} />
                    <Route path="/city/Delhi/:id" element={<RestaurantMenu/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>);

