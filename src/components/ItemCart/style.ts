import styled from 'styled-components'
import { SecondaryButton } from '../../styles/components/defaultComponents'

export const ItemCartContainer = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  img {
    width: 64px;
    height: 64px;
    margin-right: 1.25rem;
  }
`

export const MiddleItemCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const ItemPriceCart = styled.span`
  flex: 1;
  display: flex;
  justify-content: right;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme['gray-600']};
`

export const TrashButton = styled(SecondaryButton)`
  gap: 0.5rem;
  padding: 0 0.5rem;
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
