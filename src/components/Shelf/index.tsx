import { ProductCard } from '../ProductCard'
import { ProductsContainer, ShelfContainer } from './style'
import { ArrayCoffes } from '../../utils/Coffes'

export const Shelf = () => {
  return (
    <ShelfContainer>
      <h3>Nossos cafés</h3>
      <ProductsContainer>
        {ArrayCoffes.map((coffe) => {
          return <ProductCard key={coffe.name} {...coffe} />
        })}
      </ProductsContainer>
    </ShelfContainer>
  )
}
