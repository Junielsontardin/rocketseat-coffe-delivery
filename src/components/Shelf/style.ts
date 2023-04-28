import styled from 'styled-components'

export const ShelfContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-top: 6.5rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme['gray-700']};
  }
`
export const ProductsContainer = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
`
