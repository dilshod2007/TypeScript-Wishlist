import axios from "../../api/index";
import { useEffect, useState } from "react";
import { productsType } from "../../redux/types"; 
import { AxiosResponse } from "axios";

const Products = () => {
  const [products, setProducts] = useState<productsType>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response: AxiosResponse = await axios.get("/products");
        const data: productsType = response.data.products;

        if (Array.isArray(data)) {
          setProducts(data);
          console.log(data);
        } else {
          throw new Error("Mahsulotlar array ko'rinishida bo'lishi kerak");
        }
      } catch (err) {
        console.error("Mahsulotlarni yuklashda xato:", err);
      }
    };

    loadData(); 
  }, []); 

  return (
    <div className="mt-12 p-4 max-w-[1550px] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6"> Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 ? ( 
          <p className="text-center text-lg">Mahsulotlar mavjud emas.</p>
        ) : (
          products.slice(10, 14).map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={product.thumbnail} alt={product.title} className="w-full     object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-xl font-bold text-green-500">{product.price} so'm</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
