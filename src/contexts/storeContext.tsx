import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react'
import { ActionsTypes, cartReducer } from '../reducers/cart/reducer'

interface IStoreContextProps {
  children: ReactNode
}

export interface IProduct {
  name: string
  quantity: number
  price: number
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

interface IStoreContextValues {
  cart: IProduct[]
  address: IAddress
  paymentMethod: IPaymentMethod
  registerAddress: (userAddres: IAddress) => void
  selectPaymentMethod: (selectedPaymentMethod: IPaymentMethod) => void
  increaseItemToCart: (product: IProduct) => void
  decreaseItemToCart: (product: IProduct) => void
  removeItemToCart: (id: string) => void
}

const StoreContext = createContext({} as IStoreContextValues)

const StoreContextProvider = ({ children }: IStoreContextProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, [])
  const [address, setAddress] = useState({} as IAddress)
  const [paymentMethod, setPaymentMethod] = useState({} as IPaymentMethod)

  const registerAddress = (userAddress: IAddress) => {
    setAddress(userAddress)
  }

  const selectPaymentMethod = (selectedPaymenMethod: IPaymentMethod) => {
    setPaymentMethod(selectedPaymenMethod)
  }

  const increaseItemToCart = (product: IProduct) => {
    dispatch({
      type: ActionsTypes.INCREASE_ITEM_CART,
      payload: product,
    })
  }

  const decreaseItemToCart = (product: IProduct) => {
    dispatch({
      type: ActionsTypes.DECREASE_ITEM_CART,
      payload: product,
    })
  }

  const removeItemToCart = (id: string) => {
    dispatch({
      type: ActionsTypes.REMOVE_ITEM_CART,
      payload: id,
    })
  }

  return (
    <StoreContext.Provider
      value={{
        cart: cartState,
        address,
        paymentMethod,
        registerAddress,
        selectPaymentMethod,
        increaseItemToCart,
        decreaseItemToCart,
        removeItemToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)

export default StoreContextProvider
