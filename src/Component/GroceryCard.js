

export default function GroceryCard({ groceryData }) {
    return (
        <div className="flex-none">
            <a href={groceryData?.action?.link}>
                <img className="w-40 h-50 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/`+groceryData?.imageId}/>
            </a>
            <h2 className="w-40 text-center font-semibold text-lg text-gray-600 mt-2">{groceryData?.action?.text}</h2>
        </div>
        
    );
}
