import groceryItems from '../data/groceryItems.json'

export const addToBag = (id) => {
  let item = groceryItems.find((item) => item.id === id)
  return item
}