import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { BenefitsContainer, Benefit, BackgroundIcon } from './style'

export const Benefits = () => {
  return (
    <BenefitsContainer>
      <Benefit>
        <BackgroundIcon color="yellow-700">
          <ShoppingCart size={16} weight="fill" />
        </BackgroundIcon>
        <span>Compra simples e segura</span>
      </Benefit>
      <Benefit>
        <BackgroundIcon color="gray-600">
          <Package size={16} weight="fill" />
        </BackgroundIcon>
        <span>Embalagem mantém o café intacto</span>
      </Benefit>
      <Benefit>
        <BackgroundIcon color="yellow-500">
          <Timer size={16} weight="fill" />
        </BackgroundIcon>
        <span>Entrega rápida e rastreada</span>
      </Benefit>
      <Benefit>
        <BackgroundIcon color="purple-500">
          <Coffee size={16} weight="fill" />
        </BackgroundIcon>
        <span>O café chega fresquinho até você</span>
      </Benefit>
    </BenefitsContainer>
  )
}
