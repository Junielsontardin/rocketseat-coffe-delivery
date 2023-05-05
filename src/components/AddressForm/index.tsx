import {
  AddressContainer,
  AddressHeader,
  FormStyled,
  InputStyled,
} from './style'
import { MapPinLine } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'

export const AddressForm = () => {
  const { register } = useFormContext()

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
        <InputStyled
          required
          id="zipCode"
          placeholder="CEP"
          {...register('zipCode')}
        />
        <InputStyled
          required
          id="street"
          placeholder="Rua"
          {...register('street')}
        />
        <InputStyled
          required
          id="number"
          placeholder="Número"
          {...register('number')}
        />
        <InputStyled
          id="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
        <InputStyled
          required
          id="neighborhood"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <InputStyled
          required
          id="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <InputStyled
          required
          id="state"
          placeholder="UF"
          {...register('state')}
        />
      </FormStyled>
    </AddressContainer>
  )
}
