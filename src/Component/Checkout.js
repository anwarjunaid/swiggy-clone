import { useSelector } from "react-redux";

export default function Checkout() {
    const items = useSelector(store => store.CartSlice.items);

    return(
        <>
            {
                items.map(value => <div key={value.id}>{value.name}</div>)
            }
        </>
    )
}