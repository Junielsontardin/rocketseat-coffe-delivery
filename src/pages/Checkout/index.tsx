import { AddressForm } from '../../components/AddressForm'
import { CartCheckout } from '../../components/CartCheckout'
import { Payment } from '../../components/Payment'
import { CheckoutContainer, DataContainer } from './style'

const Checkout = () => {
  return (
    <CheckoutContainer>
      <DataContainer>
        <h3>Complete seu Pedido</h3>
        <AddressForm />
        <Payment />
      </DataContainer>
      <CartCheckout />
    </CheckoutContainer>
  )
}

export default Checkout
