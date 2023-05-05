import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CheckoutPage from './pages/CheckoutPage'
import OrderPlaced from './pages/OrderPlaced'
import DefaultLayout from './layouts/DefaultLayout'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Route>
    </Routes>
  )
}

export default Router
