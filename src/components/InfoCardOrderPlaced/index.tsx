import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  InfoCardOrderPlacedContainer,
  OrderPlacedInformations,
  PinAndInformationContainer,
} from './style'
import { BackgroundIcon } from '../Benefits/style'
import { useStoreContext } from '../../contexts/storeContext'

export const InfoCardOrderPlaced = () => {
  const { address, paymentMethod } = useStoreContext()

  const { street, number, city, state } = address

  const textStreetAndNumber = `${street}, ${number}`
  const textCityAndState = `${city} - ${state}`

  return (
    <InfoCardOrderPlacedContainer>
      <header>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <OrderPlacedInformations>
        <PinAndInformationContainer>
          <BackgroundIcon color="purple-500">
            <MapPin size={16} weight="fill" />
          </BackgroundIcon>
          <div>
            <span>
              Entrega em <strong>{textStreetAndNumber}</strong>
            </span>
            <span>{textCityAndState}</span>
          </div>
        </PinAndInformationContainer>
        <PinAndInformationContainer>
          <BackgroundIcon color="yellow-500">
            <Timer size={16} weight="fill" />
          </BackgroundIcon>
          <div>
            <span>Previsão de entrega</span>
            <span>
              <strong>20 min - 30 min</strong>
            </span>
          </div>
        </PinAndInformationContainer>
        <PinAndInformationContainer>
          <BackgroundIcon color="yellow-700">
            <CurrencyDollar size={16} weight="light" />
          </BackgroundIcon>
          <div>
            <span>Pagamento na entrega</span>
            <span>
              <strong>{paymentMethod.name}</strong>
            </span>
          </div>
        </PinAndInformationContainer>
      </OrderPlacedInformations>
    </InfoCardOrderPlacedContainer>
  )
}
