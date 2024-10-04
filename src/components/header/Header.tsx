import { IoIosHelpCircle } from "react-icons/io"; 
import { GrCheckboxSelected } from "react-icons/gr"; 
import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import logoc from "../../assets/comfort.png";
import { Input } from "antd";
import "../header/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    const cart = useSelector((state: any) => state.cart.products.length);
    const like = useSelector((state: any) => state.like.likedProducts.length);
   

    return (
        <>
            <div className="bg-gray-800 text-white text-sm px-4 py-1">
                <div className="max-w-[1550px] mx-auto flex items-center justify-between">
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
            </div>

            <div className="sticky top-0 w-full shadow-md nav">
                <div className="max-w-[1550px] mx-auto flex justify-between items-center p-4">
                    <div>
                       <Link to={"/"}> 
                          <img src={logoc} alt="Comforty Logo" className="w-[222px] h-auto" />
                       </Link>
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
                            <Link className="flex gap-2" to="/cart">
                                <BsCart3 className="text-xl" />
                                <p className="font-medium z-10">Cart</p>
                            </Link> 
                            <span className="text-red-500 z-10 font-bold text-xl rounded  px-1 py-0 text-center mt-[-20px]">{cart}</span> 
                        </div>

                        <div className="p-2 bg-gray-100 hover:bg-gray-200 transition rounded cursor-pointer">
                            <div className="flex gap-2">
                                <Link to="/productLikes">
                                    <FcLike className="text-2xl" />
                                </Link>
                                <span className="text-red-500 font-bold text-xl rounded  px-1 py-0 text-center mt-[-10px]">{like}</span>
                            </div> 
                        </div>

                        <div className="p-2 bg-gray-100 hover:bg-gray-200 transition rounded cursor-pointer">
                            <CgProfile className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
