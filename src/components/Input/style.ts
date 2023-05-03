import styled from 'styled-components'

export const InputStyled = styled.input`
  padding: 0.75rem;
  width: 100%;
  height: 42px;
  background: #eeeded;
  border-radius: 4px;
  outline: none;
  position: relative;
  border: 1px solid ${(props) => props.theme['gray-300']};

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme['gray-600']};

  &::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme['gray-500']};
  }

  &:active,
  &:hover,
  &:focus {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  /* &:optional {
    &::after {
      content: 'Opcional';
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-style: italic;
      font-size: 12px;
      color: ${(props) => props.theme['yellow-500']};
    }
  } */
`
