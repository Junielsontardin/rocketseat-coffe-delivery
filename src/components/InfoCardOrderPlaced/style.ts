import styled from 'styled-components'

export const InfoCardOrderPlacedContainer = styled.div`
  max-width: 32.875rem;
  width: 100%;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 2.5rem;

    h3 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 32px;
      color: ${(props) => props.theme['yellow-700']};
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 20px;
      font-stretch: 100;
      margin: 0;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const OrderPlacedInformations = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme['white-300']},
        ${(props) => props.theme['white-300']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-500']},
        ${(props) => props.theme['purple-500']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

export const PinAndInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme['gray-600']};
    }
  }
`
