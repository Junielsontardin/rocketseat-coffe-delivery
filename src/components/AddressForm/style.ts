import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-100']};
`

export const AddressHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-700']};
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

export const FormStyled = styled.form`
  display: grid;
  grid-gap: 1rem 0.75rem;
  grid-template-areas:
    'cep cep cep . . . . .'
    'street street street street street street street street'
    'number number number complement complement complement complement complement'
    'neighboor neighboor neighboor city city city city state';

  input {
    :nth-child(1) {
      grid-area: cep;
    }
    :nth-child(2) {
      grid-area: street;
    }
    :nth-child(3) {
      grid-area: number;
    }
    :nth-child(4) {
      grid-area: complement;
    }
    :nth-child(5) {
      grid-area: neighboor;
    }
    :nth-child(6) {
      grid-area: city;
    }
    :nth-child(7) {
      grid-area: state;
      max-width: 60px;
    }
  }
`
