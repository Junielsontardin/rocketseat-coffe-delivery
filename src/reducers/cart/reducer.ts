import { IProduct } from '../../contexts/storeContext'
import {
  increaseItemToCartAction,
  decreaseItemToCartAction,
  removeItemToCartAction,
} from './actions'

interface IncreaseItemCartAction {
  type: 'INCREASE_ITEM_CART'
  payload: IProduct
}

interface DecreaseItemCartAction {
  type: 'DECREASE_ITEM_CART'
  payload: IProduct
}

interface RemoveItemCartAction {
  type: 'REMOVE_ITEM_CART'
  payload: string
}

type CartReducerActions =
  | IncreaseItemCartAction
  | DecreaseItemCartAction
  | RemoveItemCartAction

export const cartReducer = (state: IProduct[], action: CartReducerActions) => {
  switch (action.type) {
    case 'INCREASE_ITEM_CART':
      return increaseItemToCartAction(state, action.payload)

    case 'DECREASE_ITEM_CART':
      return decreaseItemToCartAction(state, action.payload)

    case 'REMOVE_ITEM_CART':
      return removeItemToCartAction(state, action.payload)
  }
}
