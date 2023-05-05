import { AddressForm } from '../AddressForm'
import { CartCheckout } from '../CartCheckout'
import { Payment } from '../Payment'
import { CheckoutContainer, DataContainer } from './style'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const addressFormValidationSchema = zod.object({
  zipCode: zod.string().max(8).min(8),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().min(1).optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
})

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>

const Checkout = () => {
  const AddressUserForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  return (
    <CheckoutContainer>
      <FormProvider {...AddressUserForm}>
        <DataContainer>
          <h3>Complete seu Pedido</h3>
          <AddressForm />
          <Payment />
        </DataContainer>
        <CartCheckout />
      </FormProvider>
    </CheckoutContainer>
  )
}

export default Checkout
