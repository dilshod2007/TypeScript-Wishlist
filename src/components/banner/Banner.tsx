import { GiHamburgerMenu } from "react-icons/gi";
import product from "../../assets/product.png";
import foiz from "../../assets/50.png";
import box from "../../assets/box.png"
import truck from "../../assets/truck.png"
import hours from "../../assets/hours.png"
import shield from "../../assets/shield.png"
import "../banner/banner.css"
import zepir from "../../assets/zepir.png"
import pipe from "../../assets/pepe.png"
import bank from "../../assets/bank.png"
import doc from "../../assets/doc.png"
import moz from "../../assets/moz.png"

const Banner = () => {
    return (
        <div className=" w-full h-screen bg-gray-100 max-w-[1550px] mx-auto rounded-b-[100px]">
            <div className=" top-5 left-10 z-20 text-sm bg-white h-12  w-full flex items-center px-10 py-2 p-4 gap-4 align-center text-gray-600 text-center border-b">
                <div className="flex  items-center gap-2  text-gray-600 hover:text-teal-500 cursor-pointer hover:underline transition duration-300 font-bold flex gap-2 align-middle mt-2">
                    <GiHamburgerMenu className="text-2xl" />
                    <p>All Categories</p>
                </div>
                <div className="mt-2 flex gap-4">
                    <p className="hover:underline cursor-pointer">Home</p>
                    <p className="hover:underline cursor-pointer">Shop</p>
                    <p className="hover:underline cursor-pointer">Product</p>
                    <p className="hover:underline cursor-pointer">Pages</p>
                    <p className="hover:underline cursor-pointer">About</p>
                </div>
                <div className="mt-2 flex gap-4 ml-auto">
                    <p>Contact: <a href="https://t.me/+998904471907" className="text-blue-500">+998 (90) 447 19 07</a></p>
                </div>
            </div>

            <div className="flex items-center justify-between px-10 h-full">
                <div className="max-w-lg space-y-6">
                    <p className="text-sm text-gray-600 uppercase tracking-wider">Welcome to Chairy</p>
                    <h1 className="text-5xl font-bold leading-tight text-gray-800">
                        Best Furniture Collection for your interior.
                    </h1>
                    <button className="bg-teal-500 text-white py-2 px-6 rounded-full mt-4 hover:bg-teal-600 transition duration-300">
                        Shop Now
                    </button>
                </div>

                <div className="">
                    <div className="w-[500px] h-[500px]  flex items-center justify-center mt-[-150px] ">
                        <img src={product} alt="Product" className="w-4/5 h-auto object-contain  mt-[100px]" />
                    </div>
                    <img
                        src={foiz}
                        alt="Discount Badge"
                        className="absolute top-[250px] right-10 w-[140px] h-[140px] object-contain max-w-[140px]mx-auto"
                    />
                </div>
            </div>
            <div className="w-[1100px] h-[120px] bg-gray-200 mt-[-105px] ml-[200px] rounded-[20px] flex justify-around items-center shadow-lg">
  <div className="flex flex-col items-center">
    <img src={box} alt="Discount" className="w-8 h-8" />
    <span className="font-semibold mt-2">Discount</span>
    <p className="text-gray-600 text-sm">Every week new sales</p>
  </div>
  
  <div className="flex flex-col items-center">
    <img src={truck} alt="Free Delivery" className="w-8 h-8" />
    <span className="font-semibold mt-2">Free Delivery</span>
    <p className="text-gray-600 text-sm">100% Free for all orders</p>
  </div>
  
  <div className="flex flex-col items-center">
    <img src={hours} alt="Great Support 24/7" className="w-8 h-8" />
    <span className="font-semibold mt-2">Great Support 24/7</span>
    <p className="text-gray-600 text-sm">We care your experiences</p>
  </div>
  
  <div className="flex flex-col items-center">
    <img src={shield} alt="Secure Payment" className="w-8 h-8" />
    <span className="font-semibold mt-2">Secure Payment</span>
    <p className="text-gray-600 text-sm">100% Secure Payment Method</p>
  </div>
</div>
<div className="h-[110px] flex items-center justify-center  shadow-lg rounded-lg p-4 overflow-hidden gap-[10px] mt-[20px]">
  <div className="flex space-x-4 animate-marquee gap-[180px]">
    <img src={zepir} alt="Zepir" className="" />
    <img src={pipe} alt="Pipe" className="" />
    <img src={bank} alt="Bank" className="" />
    <img src={doc} alt="Document" className="" />
    <img src={moz} alt="Moz" className="" />
  </div>
</div>


</div>

       
    );
};

export default Banner;
