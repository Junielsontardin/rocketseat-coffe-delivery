import styled from 'styled-components'

export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-700']};
  }
`

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 160%;

  border-radius: 6px;
  color: ${(props) => props.theme['gray-600']};
  background-color: ${(props) => props.theme['gray-300']};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['gray-700']};
  }
`
