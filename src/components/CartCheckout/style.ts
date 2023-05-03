import styled from 'styled-components'
import { PrimaryButton } from '../../styles/components/defaultComponents'

export const CartContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 28rem;
  width: 100%;
  padding: 1rem 2.5rem 2.5rem;
  gap: 1.5rem;

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterCart = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: ${(props) => props.theme['gray-600']};

      &:last-child {
        font-size: 16px;
      }
    }

    &:last-of-type {
      span {
        font-weight: 700;
        font-size: 20px;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`

export const ConfirmOrderButton = styled(PrimaryButton)`
  margin-top: 0.75rem;
  text-transform: uppercase;
  font-stretch: 100;
`
