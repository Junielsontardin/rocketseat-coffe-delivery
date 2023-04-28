import { ShoppingCart } from '@phosphor-icons/react'
import CoffeCard from '../../assets/coffe-card.png'
import { Peculiaritys } from '../Peculiaritys'
import { QuantitySelector } from '../QuantitySelector'
import {
  ProductCardContainer,
  ProductDescription,
  ProductName,
  ProductPrice,
  ProductCardFooter,
  ActionUserProduct,
  AddToCart,
} from './style'
import { useState } from 'react'
import { useStoreContext } from '../../contexts/storeContext'

interface IProductCard {
  name: string
  description: string
  price: string
  peculiaritys: string[]
}

type Method = 'increase' | 'decrease'

export const ProductCard = ({
  name,
  description,
  peculiaritys,
  price,
}: IProductCard) => {
  const [quantity, setQuantity] = useState(1)
  const { increaseItemToCart } = useStoreContext()

  const handleQuantity = (method: Method) => {
    switch (method) {
      case 'decrease':
        if (quantity - 1 > 0) {
          setQuantity((prev) => --prev)
        }
        break
      case 'increase':
        setQuantity((prev) => ++prev)
        break
    }
  }

  const handleAddItemToCart = () => {
    increaseItemToCart({
      name,
      quantity,
      price: Number(price),
    })
    setQuantity(1)
  }

  // const handleDecreaseItemToCart = () => {
  //   handleQuantity('decrease')
  //   decreaseItemToCart({
  //     name,
  //     price: Number(price),
  //     quantity: 1,
  //   })
  // }

  // const handleIncreaseItemToCart = () => {
  //   handleQuantity('increase')
  //   increaseItemToCart({
  //     name,
  //     price: Number(price),
  //     quantity: 1,
  //   })
  // }

  return (
    <ProductCardContainer>
      <img src={CoffeCard} alt="" />
      <Peculiaritys peculiaritys={peculiaritys} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductCardFooter>
        <ProductPrice>{price}</ProductPrice>
        <ActionUserProduct>
          <QuantitySelector
            quantity={quantity}
            handleDecreaseQuantity={() => handleQuantity('decrease')}
            handleIncreaseQuantity={() => handleQuantity('increase')}
          />
          <AddToCart onClick={handleAddItemToCart}>
            <ShoppingCart size={20} weight="fill" />
          </AddToCart>
        </ActionUserProduct>
      </ProductCardFooter>
    </ProductCardContainer>
  )
}
