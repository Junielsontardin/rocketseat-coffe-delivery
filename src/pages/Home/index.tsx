import { InfoCard } from '../../components/InfoCard'
import { Shelf } from '../../components/Shelf'
import { MainContainer } from './style'

const Home = () => {
  return (
    <MainContainer>
      <InfoCard />
      <Shelf />
    </MainContainer>
  )
}

export default Home
