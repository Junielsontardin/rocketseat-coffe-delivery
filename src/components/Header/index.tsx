import { CartAndLocationContainer, HeaderContainer } from './style'
import LogoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'
import { LocationUser } from '../UserLocation'
import { Minicart } from '../Minicart'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeDelivery} alt="Logo Coffe Delivery" />
      </NavLink>

      <CartAndLocationContainer>
        <LocationUser />
        <Minicart />
      </CartAndLocationContainer>
    </HeaderContainer>
  )
}
