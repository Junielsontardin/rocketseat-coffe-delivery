import { IProduct } from '../../contexts/storeContext'
import {
  increaseItemToCartAction,
  decreaseItemToCartAction,
  removeItemToCartAction,
} from './actions'

export enum ActionsTypes {
  INCREASE_ITEM_CART = 'INCREASE_ITEM_CART',
  DECREASE_ITEM_CART = 'DECREASE_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
}

interface IncreaseItemCartAction {
  type: ActionsTypes.INCREASE_ITEM_CART
  payload: IProduct
}

interface DecreaseItemCartAction {
  type: ActionsTypes.DECREASE_ITEM_CART
  payload: IProduct
}

interface RemoveItemCartAction {
  type: ActionsTypes.REMOVE_ITEM_CART
  payload: string
}

type CartReducerActions =
  | IncreaseItemCartAction
  | DecreaseItemCartAction
  | RemoveItemCartAction

export const cartReducer = (state: IProduct[], action: CartReducerActions) => {
  switch (action.type) {
    case ActionsTypes.INCREASE_ITEM_CART:
      return increaseItemToCartAction(state, action.payload)

    case ActionsTypes.DECREASE_ITEM_CART:
      return decreaseItemToCartAction(state, action.payload)

    case ActionsTypes.REMOVE_ITEM_CART:
      return removeItemToCartAction(state, action.payload)
  }
}
