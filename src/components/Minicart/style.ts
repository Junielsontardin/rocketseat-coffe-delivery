import styled from 'styled-components'

export const MinicartStyled = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    padding: 10px;

    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 6px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: 20px;
      border-radius: 100px;

      position: absolute;
      top: -8px;
      right: -8.35px;

      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 12px;
      text-align: center;
      line-height: 1;
      letter-spacing: -0.06em;

      background-color: ${(props) => props.theme['yellow-700']};
      color: ${(props) => props.theme.white};
    }
  }
`
