import CheckoutContextProvider from '../../contexts/checkoutContext'
import Checkout from '../../components/Checkout'

const CheckoutPage = () => {
  return (
    <CheckoutContextProvider>
      <Checkout />
    </CheckoutContextProvider>
  )
}

export default CheckoutPage
