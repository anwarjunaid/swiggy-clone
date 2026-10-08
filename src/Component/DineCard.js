

export default function DineCard({ dineData }) {
    return (
        <div className="max-w-sm flex-none relative">
            <a target="_blank" href={dineData?.cta?.link}>
                <img className="block w-80 h-50"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${dineData?.info?.mediaFiles?.[0]?.url}`}
                />
            </a>
            <div className="absolute bottom-4 left-3 right-3 flex items-center gap-2 text-xl font-bold text-white z-10">
                <p className=" flex-1 truncate">{dineData?.info?.name}</p>
                <p className="shrink-0">{dineData?.info?.rating?.value}</p>
            </div>
            <div className="absolute bg-gradient-to-t from-black  bottom-0 left-0 right-0 h-16"></div>
        </div>
        
    );
}

