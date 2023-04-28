import styled from 'styled-components'

export const PeculiaritysContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  margin-top: 0.75rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 10px;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
  }
`
