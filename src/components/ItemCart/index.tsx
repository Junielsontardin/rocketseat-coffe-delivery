import {
  ItemCartContainer,
  ItemPriceCart,
  MiddleItemCartContainer,
  TrashButton,
} from './style'
import CoffeCard from '../../assets/coffe-card.png'
import { QuantitySelector } from '../QuantitySelector'
import { Trash } from '@phosphor-icons/react'
import { IProduct, useStoreContext } from '../../contexts/storeContext'
import { formatPriceToBrl } from '../../utils/formatPriceToBrl'

export const ItemCart = (product: IProduct) => {
  const { name, price, quantity } = product

  const { decreaseItemToCart, increaseItemToCart, removeItemToCart } =
    useStoreContext()

  const handleIncreaseItem = () => {
    increaseItemToCart(product)
  }

  const handleDecreaseItem = () => {
    decreaseItemToCart(product)
  }

  const handleRemoveItem = () => {
    removeItemToCart(product.name)
  }

  const priceItem = formatPriceToBrl(price)

  return (
    <ItemCartContainer>
      <img src={CoffeCard} alt="" />
      <MiddleItemCartContainer>
        <span>{name}</span>
        <div>
          <QuantitySelector
            quantity={quantity}
            handleDecreaseQuantity={handleDecreaseItem}
            handleIncreaseQuantity={handleIncreaseItem}
          />
          <TrashButton onClick={handleRemoveItem}>
            <Trash size={16} weight="bold" />
            REMOVER
          </TrashButton>
        </div>
      </MiddleItemCartContainer>
      <ItemPriceCart>{priceItem}</ItemPriceCart>
    </ItemCartContainer>
  )
}
