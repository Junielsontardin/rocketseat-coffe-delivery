import styled from 'styled-components'

export const QuantitySelectorContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 4px;
  height: 2.375rem;
  width: fit-content;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};

  span {
    font-family: 'Roboto';
    font-size: 16px;
    text-align: center;
    min-width: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};
  }
`
