import {
  OptionPayment,
  OptionsPayment,
  PaymentContainer,
  PaymentHeader,
} from './style'
import { CurrencyDollar, CreditCard, Money, Bank } from '@phosphor-icons/react'

export const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} weight="light" />
        <div>
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PaymentHeader>
      <OptionsPayment>
        <OptionPayment selected={false}>
          <CreditCard size={16} weight="light" />
          Cartão de Crédito
        </OptionPayment>
        <OptionPayment selected={true}>
          <Bank size={16} weight="light" />
          Cartão de Débito
        </OptionPayment>
        <OptionPayment selected={false}>
          <Money size={16} weight="light" />
          Dinheiro
        </OptionPayment>
      </OptionsPayment>
    </PaymentContainer>
  )
}
