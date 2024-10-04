import b1 from "../../assets/b7.jpg";
import b2 from "../../assets/b8.jpg";
import b3 from "../../assets/b9.avif";
import b4 from "../../assets/b4.webp";
import b5 from "../../assets/b5.jpg";
import b6 from "../../assets/b6.jpg";

const brands = [
    { image: b1, title: "discover the brand", quantity: 150 },
    { image: b2, title: "discover the brand", quantity: 200 },
    { image: b3, title: "discover the brand", quantity: 100 },
    { image: b4, title: "discover the brand", quantity: 80 },
    { image: b5, title: "discover the brand", quantity: 170 },
    { image: b6, title: "discover the brand", quantity: 120 },
];

const Brand = () => {
    return (
      <>
        <div className="overflow-hidden py-12 bg-gradient-to-b from-white to-gray-100 mt-[100px]">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 max-w-[1550px] mx-auto">Top Categories</h1>
            <div className="max-w-[1550px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {brands.map((brand, index) => (
                        <div key={index} className="group relative">
                            <img 
                                src={brand.image} 
                                alt={brand.title} 
                                className="w-full h-[300px] object-cover rounded-lg transform transition duration-500 group-hover:scale-105 shadow-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 h-20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-b-lg flex flex-col items-center justify-center">
                                <span className="text-white text-lg font-semibold">{brand.title}</span>
                                <span className="text-white text-sm">{brand.quantity} Products</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </>
    );
};

export default Brand;
