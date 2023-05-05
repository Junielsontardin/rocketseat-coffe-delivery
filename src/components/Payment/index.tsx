import { IPaymentMethod, useCheckout } from '../../contexts/checkoutContext'
import {
  OptionPayment,
  OptionsPayment,
  PaymentContainer,
  PaymentHeader,
} from './style'
import { CurrencyDollar, CreditCard, Money, Bank } from '@phosphor-icons/react'

enum CREDIT_CARD {
  type = 'CREDIT_CARD',
  name = 'Cartão de débito',
}

enum DEBIT_CARD {
  type = 'DEBIT_CARD',
  name = 'Cartão de débito',
}

enum MONEY {
  type = 'MONEY',
  name = 'Dinheiro',
}

export const Payment = () => {
  const { paymentMethod, selectPaymentMethod } = useCheckout()

  const handleSelectPaymentMethod = (method: IPaymentMethod) => {
    selectPaymentMethod(method)
  }

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
        <OptionPayment
          onClick={() => {
            handleSelectPaymentMethod(CREDIT_CARD)
          }}
          selected={paymentMethod.type === CREDIT_CARD.type}
        >
          <CreditCard size={16} weight="light" />
          Cartão de Crédito
        </OptionPayment>
        <OptionPayment
          onClick={() => {
            handleSelectPaymentMethod(DEBIT_CARD)
          }}
          selected={paymentMethod.type === DEBIT_CARD.type}
        >
          <Bank size={16} weight="light" />
          Cartão de Débito
        </OptionPayment>
        <OptionPayment
          onClick={() => {
            handleSelectPaymentMethod(MONEY)
          }}
          selected={paymentMethod.type === MONEY.type}
        >
          <Money size={16} weight="light" />
          Dinheiro
        </OptionPayment>
      </OptionsPayment>
    </PaymentContainer>
  )
}
