import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;
  height: auto;
  padding: 0 1.5rem 1.25rem;

  border-radius: 6px 32px;
  background-color: ${(props) => props.theme['gray-100']};

  img {
    max-width: 7.5rem;
    max-height: 7.5rem;

    margin-top: -1.25rem;
  }
`
export const ProductName = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-top: 1rem;
  color: ${(props) => props.theme['gray-700']};
`

export const ProductDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-top: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme['gray-500']};
`

export const ProductPrice = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: ${(props) => props.theme['gray-600']};

  &::before {
    content: 'R$';
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme['gray-600']};
    margin-right: 0.25rem;
  }
`

export const ProductCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
  width: 100%;
`

export const ActionUserProduct = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 2.375rem;
  cursor: pointer;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['purple-700']};

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
