

export default function FoodCard({ foodData }) {
    return (
        <>
            <a href={foodData?.action?.link}>
                <img className="w-40 h-50 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/`+foodData?.imageId}/>
            </a>
        </>
        
    );
}
