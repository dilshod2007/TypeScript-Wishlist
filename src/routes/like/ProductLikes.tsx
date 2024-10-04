import { useSelector, useDispatch } from "react-redux"; 
import { productsType } from "../../redux/types"; 
import { useEffect, useState } from "react";
import axios from "../../api/index";
import { FiHeart } from "react-icons/fi";
import { unlikeProduct } from "../../redux/slices/LikeSlices"; 

const ProductLikes = () => {
    const likedProductIds = useSelector((state: any) => state.like.likedProducts);
    const [likedProducts, setLikedProducts] = useState<productsType[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLikedProducts = async () => {
            try {
                const response = await axios.get("/products"); 
                const allProducts = response.data.products;

                const liked = allProducts.filter((product: any) =>
                    likedProductIds.includes(product.id)
                );

                setLikedProducts(liked);
            } catch (err) {
                console.error("Mahsulotlarni yuklashda xato:", err);
            }
        };

        fetchLikedProducts();
    }, [likedProductIds]);

    const toggleLike = (productId: number) => {
        dispatch(unlikeProduct(productId)); 

        setLikedProducts(likedProducts.filter((product) => product.id !== productId));
    };

    if (likedProducts.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">Sizda hech qanday mahsulot yoq</h1>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px]">
            {likedProducts.map((product: any) => (
                <div key={product.id} className="relative product-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                     <button onClick={() => toggleLike(product.id)} className="absolute top-4 right-4">
                            <FiHeart size={20} color='red' /> 
                        </button>
                    <img src={product.thumbnail} alt={product.title} className="w-full object-cover border-b" />
                   
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-xl font-bold text-green-500">{product.price} so'm</p>
                        <p>{product.quantity}</p>
                       
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductLikes;
