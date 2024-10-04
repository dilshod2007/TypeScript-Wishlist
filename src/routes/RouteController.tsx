import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const ProductLikes = lazy(() => import('../routes/like/ProductLikes'));
const Home= lazy(() => import('../routes/home/Home'));
import Cart from '../routes/cart/Cart';

const RouteController = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/productLikes" element={<ProductLikes />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
}

export default RouteController;
