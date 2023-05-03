import styled from 'styled-components'
import { SecondaryButton } from '../../styles/components/defaultComponents'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-100']};
`

export const PaymentHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-family: 'Roboto', sans-serif;

      &:first-child {
        font-size: 16px;
        color: ${(props) => props.theme['gray-700']};
      }

      &:last-child {
        font-size: 14px;
        color: ${(props) => props.theme['gray-600']};
      }
    }
  }
`

export const OptionsPayment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 0.75rem;
  margin-top: 2rem;
`

interface ButtonPayment {
  selected: boolean
}

export const OptionPayment = styled(SecondaryButton)<ButtonPayment>`
  justify-content: start;
  gap: 0.75rem;
  height: 51px;
  text-transform: uppercase;

  border: 1px solid
    ${(props) => (props.selected ? props.theme['purple-500'] : 'transparent')};
`
