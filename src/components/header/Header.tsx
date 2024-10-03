import { IoIosHelpCircle } from "react-icons/io"; 
import { GrCheckboxSelected } from "react-icons/gr"; 
import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import logoc from "../../assets/comfort.png";
import { Input } from "antd";
import "../header/header.css"

const Header = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);

    return (
        <>
            <div className="flex items-center justify-between bg-gray-800 text-white text-sm px-4 py-1">
                <div className="flex items-center gap-2">
                    <GrCheckboxSelected className="text-green-500" />
                    <p>Free shipping on all orders over $50</p>
                </div>
                <div className="flex items-center gap-4">
                    <select className="bg-gray-800 border border-gray-700 p-1 rounded">
                        <option value="uz">Uzb</option>
                        <option value="en">En</option>
                        <option value="ru">Ru</option>
                    </select>
                    <p className="hover:underline cursor-pointer">FAQs</p>
                    <div className="flex items-center gap-1">
                        <IoIosHelpCircle className="text-xl" />
                        <p>Need Help</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center p-4  shadow-md sticky top-0 nav">
                <div>
                    <img src={logoc} alt="Comforty Logo" className="w-[222px] h-auto" />
                </div>

                <div className="flex-grow mx-32">
                    <Search 
                        placeholder="Search for products..." 
                        onSearch={onSearch} 
                        enterButton 
                        className="w-full" 
                    />
                </div>

                <div className="flex gap-4 items-center">
                    <div className="flex items-center p-2 bg-gray-100 hover:bg-gray-200 transition rounded gap-2 cursor-pointer">
                        <BsCart3 className="text-xl" />
                        <p className="font-medium">Cart</p>
                    </div>

                    <div className="p-2 bg-gray-100 hover:bg-gray-200 transition rounded cursor-pointer">
                        <FcLike className="text-2xl" />
                    </div>

                    <div className="p-2 bg-gray-100 hover:bg-gray-200 transition rounded cursor-pointer">
                        <CgProfile className="text-2xl" />
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Header;
