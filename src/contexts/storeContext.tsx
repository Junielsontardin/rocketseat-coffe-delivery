import { ReactNode, createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart/reducer'

interface IStoreContextProps {
  children: ReactNode
}

export interface IProduct {
  name: string
  quantity: number
  price: number
}

interface IStoreContextValues {
  cart: IProduct[]
  increaseItemToCart: (product: IProduct) => void
  decreaseItemToCart: (product: IProduct) => void
  removeItemToCart: (id: string) => void
}

const StoreContext = createContext({} as IStoreContextValues)

const StoreContextProvider = ({ children }: IStoreContextProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, [])

  const increaseItemToCart = (product: IProduct) => {
    dispatch({
      type: 'INCREASE_ITEM_CART',
      payload: product,
    })
  }

  const decreaseItemToCart = (product: IProduct) => {
    dispatch({
      type: 'DECREASE_ITEM_CART',
      payload: product,
    })
  }

  const removeItemToCart = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM_CART',
      payload: id,
    })
  }

  return (
    <StoreContext.Provider
      value={{
        cart: cartState,
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
