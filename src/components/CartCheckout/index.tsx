import { useStoreContext } from '../../contexts/storeContext'
import { ItemCart } from '../ItemCart'
import {
  CartContainer,
  CartContent,
  ConfirmOrderButton,
  FooterCart,
  ListItems,
} from './style'

export const CartCheckout = () => {
  const { cart } = useStoreContext()

  if (!cart.length) return <></>

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
            <span>R$ {totalItensPrice}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {deliveryPrice}</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ {totalOrder}</span>
          </div>
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </FooterCart>
      </CartContent>
    </CartContainer>
  )
}
