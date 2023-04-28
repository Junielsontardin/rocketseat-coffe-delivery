import { Minus, Plus } from '@phosphor-icons/react'
import { QuantitySelectorContainer } from './style'

interface QuantitySelectorProps {
  quantity: number
  handleIncreaseQuantity: () => void
  handleDecreaseQuantity: () => void
}

export const QuantitySelector = ({
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: QuantitySelectorProps) => {
  return (
    <QuantitySelectorContainer>
      <button onClick={handleDecreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
