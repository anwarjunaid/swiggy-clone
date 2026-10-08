export default function Shimmer() {
    return (
        <div className="w-[80%] mx-auto flex flex-wrap mt-5 gap-5">
            {Array.from({ length: 16 }, (_, index) => (
                <div key={index} className="w-80">
                    <div className="w-80 h-50 rounded-xl bg-gray-200"></div>
                    <div className="w-[95%] mx-auto mt-3">
                        <div className="w-36 h-6 bg-gray-200 mb-1"></div>
                        <div className="w-40 h-6 bg-gray-200 mb-1"></div>
                        <div className="w-76 h-6 bg-gray-200 mb-1"></div>
                        <div className="w-24 h-6 bg-gray-200"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}