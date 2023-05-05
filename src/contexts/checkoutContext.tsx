import { createContext, useContext, ReactNode, useState } from 'react'

interface ICheckoutContextProps {
  children: ReactNode
}

interface IAddress {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface CREDIT_CARD {
  type: 'CREDIT_CARD'
  name: 'Cartão de débito'
}

export interface DEBIT_CARD {
  type: 'DEBIT_CARD'
  name: 'Cartão de débito'
}

interface MONEY {
  type: 'MONEY'
  name: 'Dinheiro'
}

export type IPaymentMethod = CREDIT_CARD | DEBIT_CARD | MONEY

interface ICheckoutContextValues {
  address: IAddress
  registerAddress: (userAddres: IAddress) => void
  paymentMethod: IPaymentMethod
  selectPaymentMethod: (selectedPaymentMethod: IPaymentMethod) => void
}

const CheckoutContext = createContext({} as ICheckoutContextValues)

const CheckoutContextProvider = ({ children }: ICheckoutContextProps) => {
  const [address, setAddress] = useState({} as IAddress)
  const [paymentMethod, setPaymentMethod] = useState({} as IPaymentMethod)

  const registerAddress = (userAddress: IAddress) => {
    setAddress(userAddress)
  }

  const selectPaymentMethod = (selectedPaymenMethod: IPaymentMethod) => {
    setPaymentMethod(selectedPaymenMethod)
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        paymentMethod,
        registerAddress,
        selectPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => useContext(CheckoutContext)

export default CheckoutContextProvider
