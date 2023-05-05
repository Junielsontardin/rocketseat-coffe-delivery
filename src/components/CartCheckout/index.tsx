import { useNavigate } from 'react-router-dom'
import { useCheckout } from '../../contexts/checkoutContext'
import { useStoreContext } from '../../contexts/storeContext'
import { formatPriceToBrl } from '../../utils/formatPriceToBrl'
import { ItemCart } from '../ItemCart'
import {
  CartContainer,
  CartContent,
  ConfirmOrderButton,
  FooterCart,
  ListItems,
} from './style'
import { useFormContext } from 'react-hook-form'

export const CartCheckout = () => {
  const { cart } = useStoreContext()
  const { handleSubmit } = useFormContext()
  const { registerAddress, paymentMethod } = useCheckout()
  const navigate = useNavigate()

  if (!cart.length) return <></>

  const handleSubmitCheckout = (data: any) => {
    registerAddress(data)

    if (paymentMethod.type) {
      navigate('/order-placed')
    }
  }

  const deliveryPrice = 3.5

  const totalItensPrice = cart.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.quantity * currentItem.price
  }, 0)

  const totalOrder = deliveryPrice + totalItensPrice

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>
      <CartContent>
        <ListItems>
          {cart.map((item) => {
            return <ItemCart key={item.name} {...item} />
          })}
        </ListItems>
        <FooterCart>
          <div>
            <span>Total de itens</span>
            <span>{formatPriceToBrl(totalItensPrice)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{formatPriceToBrl(deliveryPrice)}</span>
          </div>
          <div>
            <span>Total</span>
            <span>{formatPriceToBrl(totalOrder)}</span>
          </div>
          <ConfirmOrderButton onClick={handleSubmit(handleSubmitCheckout)}>
            Confirmar pedido
          </ConfirmOrderButton>
        </FooterCart>
      </CartContent>
    </CartContainer>
  )
}
