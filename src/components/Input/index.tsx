import { InputHTMLAttributes } from 'react'
import { InputStyled } from './style'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyled {...props}></InputStyled>
}
