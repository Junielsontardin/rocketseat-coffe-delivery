import { ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { MinicartStyled } from './style'
import { useStoreContext } from '../../contexts/storeContext'

export const Minicart = () => {
  const { cart } = useStoreContext()

  const quantityOfItemsInCart = cart.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0,
  )

  return (
    <MinicartStyled>
      <NavLink to="/checkout">
        {quantityOfItemsInCart > 0 && <span>{quantityOfItemsInCart}</span>}
        <ShoppingCart size={20} weight="fill" />
      </NavLink>
    </MinicartStyled>
  )
}
