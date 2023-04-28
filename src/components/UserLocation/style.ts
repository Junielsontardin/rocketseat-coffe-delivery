import styled from 'styled-components'

export const Location = styled.div`
  max-width: 9rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
  border-radius: 6px;

  gap: 0.25rem;

  span {
    font-size: 0.875rem;
  }
`
