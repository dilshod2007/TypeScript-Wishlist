import { BsEye } from "react-icons/bs"; 
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, removeFromCart, clearCartItem } from "../../redux/slices/cartSlices";
import { productsType } from "../../redux/types/index";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const productsCart = useSelector((state: any) => state.cart);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

  const handleQuantityIncrease = (product:productsType) => {
    dispatch(addToCart(product));
  };

  const handleQuantityDecrease = (product: productsType) => {
    dispatch(removeFromCart(product));
    if (product.quantity === 1) {
      dispatch(clearCartItem(product));
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!productsCart || productsCart.products.length === 0) {
    return <div className="text-center text-3xl mt-[200px] text-gray-500 font-bold">Savatcha bo'sh 😊</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sizning Savatchangiz</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {productsCart.products.map((product: productsType) => (
          <div key={product.id} className="flex border rounded-lg shadow-lg p-4 bg-white relative">
            <div className="relative group">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <button
                onClick={() => handleImageClick(product.thumbnail)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
              <div>
              <BsEye className="text-3xl text-white ml-6" />
              <span className=" text-white"> view image </span>
              </div>
              </button>
            </div>
            <div className="ml-6 flex-1">
              <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-xl text-green-500 font-bold">{product.price * product.quantity} so'm</p>
              <div className="flex items-center mt-4 space-x-2">
                <button
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                  onClick={() => handleQuantityDecrease(product)}
                >
                  -
                </button>
                <span className="text-xl font-semibold">{product.quantity}</span>
                <button
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                  onClick={() => handleQuantityIncrease(product)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center ml-auto">
              <button
                onClick={() => handleQuantityDecrease(product)}
                className="text-gray-400 hover:text-red-600"
              >
                <FiTrash2 size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="w-[600px] h-[600px] rounded-lg" />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
