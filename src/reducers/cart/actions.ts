import { IProduct } from '../../contexts/storeContext'

export const increaseItemToCartAction = (
  items: IProduct[],
  itemToAdd: IProduct,
) => {
  const indexOfItemOnCart = items.findIndex(
    (item) => item.name === itemToAdd.name,
  )

  if (indexOfItemOnCart < 0) {
    return [...items, itemToAdd]
  }

  const itemOfCartToAddQuantity = items[indexOfItemOnCart]

  const updatedQuantityOfItem = ++itemOfCartToAddQuantity.quantity

  items[indexOfItemOnCart].quantity = updatedQuantityOfItem

  return [...items]
}

export const decreaseItemToCartAction = (
  items: IProduct[],
  itemToAdd: IProduct,
) => {
  const indexOfItemOnCart = items.findIndex(
    (item) => item.name === itemToAdd.name,
  )

  if (indexOfItemOnCart === -1) return [...items]

  const itemOfCartToAddQuantity = items[indexOfItemOnCart]

  const updatedQuantityOfItem = --itemOfCartToAddQuantity.quantity

  if (updatedQuantityOfItem <= 0) {
    items.splice(indexOfItemOnCart, 1)
    return [...items]
  }

  items[indexOfItemOnCart].quantity = updatedQuantityOfItem

  return [...items]
}

export const removeItemToCartAction = (
  items: IProduct[],
  itemToRemove: string,
) => {
  const itemsWithRemovedItem = items.filter(
    (item) => item.name !== itemToRemove,
  )

  return itemsWithRemovedItem
}
