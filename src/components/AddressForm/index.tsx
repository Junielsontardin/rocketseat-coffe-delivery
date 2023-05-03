import { Input } from '../Input'
import { AddressContainer, AddressHeader, FormStyled } from './style'
import { MapPinLine } from '@phosphor-icons/react'

export const AddressForm = () => {
  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine size={22} weight="light" />
        <div>
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </AddressHeader>

      <FormStyled>
        <Input required placeholder="CEP" />
        <Input required placeholder="Rua" />
        <Input required placeholder="Número" />
        <Input placeholder="Complemento" />
        <Input required placeholder="Bairro" />
        <Input required placeholder="Cidade" />
        <Input required placeholder="UF" />
      </FormStyled>
    </AddressContainer>
  )
}
