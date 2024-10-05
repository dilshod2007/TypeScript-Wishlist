import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Spin } from 'antd';

const ProductLikes = lazy(() => import('../routes/like/ProductLikes'));
const Home = lazy(() => import('../routes/home/Home'));
import Cart from '../routes/cart/Cart';
import Login from '../routes/login/Login';
import Register from './register/Register';

const RouteController = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        {loading ? <Spin size="large" className='text-center' /> : null}
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productLikes" element={<ProductLikes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
};

export default RouteController;
