import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const ProductLikes = lazy(() => import('../routes/like/ProductLikes'))
const RouteController = () => {
  return (
    <>
        <Routes>
          <Route path="/productLikes" element={<Suspense fallback={<div>Loading...</div>}><ProductLikes /></Suspense>} />
        </Routes>
    </>
  )
}

export default RouteController