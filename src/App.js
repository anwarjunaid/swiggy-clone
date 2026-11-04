import ReactDom from "react-dom/client";
import Restaurant from "./Component/Restaurant";
import {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Component/Home";
import RestaurantMenu from "./Component/RestaurantMenu";
import SearchFood from "./Component/SearchFood";
import SecondaryHome from "./Component/SecondaryHome";
import { Provider } from "react-redux";
import { store } from "./Stores/stores";
import Checkout from "./Component/Checkout";

function App(){
    return(
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route element={<SecondaryHome/>}>
                            <Route path="/restaurants" element={<Restaurant/>} />
                            <Route path="/city/Delhi/:id" element={<RestaurantMenu/>} />
                            <Route path="/city/Delhi/:id/search" element={<SearchFood/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>);

