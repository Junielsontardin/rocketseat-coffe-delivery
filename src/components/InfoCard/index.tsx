import CoffeImage from '../../assets/coffe-image.png'
import { Benefits } from '../Benefits'
import {
  InfoCardContainer,
  InformationContainer,
  TextsContainer,
} from './style'

export const InfoCard = () => {
  return (
    <InfoCardContainer>
      <InformationContainer>
        <TextsContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextsContainer>
        <Benefits />
      </InformationContainer>

      <img src={CoffeImage} alt="Café" />
    </InfoCardContainer>
  )
}
