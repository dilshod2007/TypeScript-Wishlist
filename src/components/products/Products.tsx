import { FiShoppingCart, FiHeart } from "react-icons/fi";
import axios from "../../api/index";
import { useEffect, useState } from "react";
import { productsType } from "../../redux/types";
import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux"; 
import { likeProduct, unlikeProduct } from "../../redux/slices/LikeSlices";
import "../products/products.css";

const Products = () => {
  const [products, setProducts] = useState<productsType>([]);
  const dispatch = useDispatch(); 
  const likedProducts = useSelector((state: any) => state.like.likedProducts); 

  useEffect(() => {
    const loadData = async () => {
      try {
        const response: AxiosResponse = await axios.get("/products");
        const data: productsType = response.data.products;

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
      

      console.log(likedProducts);
    } else {
      dispatch(likeProduct(productId)); 
      alert("Mahsulot muvaffaqiyatli saqlandi");
    }
  };

  return (
    <div className="mt-12 p-4 max-w-[1550px] mx-auto mt-[250px]">
      <h1 className="text-4xl font-bold mb-6">Featured Products</h1>
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.length === 0 ? (
          <p className="text-lg text-center">Mahsulotlar mavjud emas.</p>
        ) : (
          products.slice(10, 14).map((product) => (
            <div
              key={product.id}
              className="relative product-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full object-cover border-b"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-xl font-bold text-green-500">
                  {product.price} so'm
                </p>
              </div>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button onClick={() => toggleLike(product.id)}>
                <FiHeart size={20} color={likedProducts.includes(product.id) ? 'red' : 'grey'} />
                </button>
              </div>
              <div className="absolute bottom-4 right-4">
                <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
