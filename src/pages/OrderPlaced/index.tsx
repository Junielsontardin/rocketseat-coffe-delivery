import { InfoCardOrderPlaced } from '../../components/InfoCardOrderPlaced'
import { OrderPlacedContainer } from './style'
import DeliveryImage from '../../assets/Illustration.png'

const OrderPlaced = () => {
  return (
    <OrderPlacedContainer>
      <InfoCardOrderPlaced />
      <img src={DeliveryImage} alt="Entregador" />
    </OrderPlacedContainer>
  )
}

export default OrderPlaced
