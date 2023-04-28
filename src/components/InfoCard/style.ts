import styled from 'styled-components'

export const InfoCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36.75rem;
  gap: 4rem;
`
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 48px;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${(props) => props.theme['gray-700']};
    font-stretch: 100;
  }
`
