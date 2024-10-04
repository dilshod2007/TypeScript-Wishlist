  import { FiShoppingCart, FiHeart, FiEye, FiX } from "react-icons/fi";
  import axios from "../../api/index";
  import { useEffect, useState } from "react";
  import { IProduct  } from "../../redux/types/index";
  import { AxiosResponse } from "axios";
  import { useDispatch, useSelector } from "react-redux"; 
  import { likeProduct, unlikeProduct } from "../../redux/slices/LikeSlices";
  import "../products/products.css";
  import { addToCart } from "../../redux/slices/cartSlices";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const Products = () => {
    const [products, setProducts] = useState <IProduct[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const dispatch = useDispatch(); 
    const likedProducts = useSelector((state: any) => state.like.likedProducts); 
    const notify = () => toast("Wow so easy!");
    useEffect(() => {
      const loadData = async () => {
        try {
          const response: AxiosResponse = await axios.get("/products");
          const data: IProduct[] = response.data.products;

          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            throw new Error("Mahsulotlar array ko'rinishida bo'lishi kerak");
          }
        } catch (err) {
          console.error("Mahsulotlarni yuklashda xato:", err);
        }
      };

      loadData();
    }, []);

    const toggleLike = (productId: number) => {
      if (likedProducts.includes(productId)) {
        dispatch(unlikeProduct(productId));
        alert("Mahsulot muvaffaqiyatli o`chirildi");
      } else {
        dispatch(likeProduct(productId)); 
        alert("Mahsulot muvaffaqiyatli saqlandi");
      }
    };

    const handleImageClick = (thumbnail: string) => {
      setSelectedImage(thumbnail); 
    };

    const closeModal = () => {
      setSelectedImage(null); 
    };

    const handleAddToCart = (product: IProduct) => {
      dispatch(addToCart(product));

      notify();
      
    };

    return (
      <div className="mt-12 p-4 max-w-[1550px] mx-auto mt-[260px]">
        <h1 className="text-4xl font-bold mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="text-lg text-center">Mahsulotlar mavjud emas.</p>
          ) : (
            products.slice(10, 14).map(( product) => (
              <div
                key={product.id}
                className="relative product-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full object-cover border-b transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button onClick={() => toggleLike(product.id)}>
                    <FiHeart size={20} color={likedProducts.includes(product.id) ? 'red' : 'grey'} />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button onClick={() => handleAddToCart(product)} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ">
                    <FiShoppingCart size={20} />
                  </button>
                </div>
                <div className="absolute top-2 left-2 flex space-x-2 ">
                  <button
                    onClick={() => handleImageClick(product.thumbnail)}
                    className="bg-white rounded-full p-1 shadow hover:bg-gray-200"
                  >
                    <FiEye size={20} />
                  </button>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                  <p className="text-xl font-bold text-green-500">
                    {product.price} so'm
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Product" className=" w-[500px] object-contain" />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-700"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Products;
