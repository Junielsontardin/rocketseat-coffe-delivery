import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;

  max-width: 90rem;
  margin: 5.75rem auto 10rem auto;
  padding: 1rem 10rem;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 0.25rem;
  }
`
