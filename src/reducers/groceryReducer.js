import { ADD_GROCERY, REMOVE_GROCERY } from '../action'
import groceryItems from '../data/groceryItems.json'
import { addToBag } from './helper'

const reducer = (state = groceryItems, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let grocery = state.filter(item => item.id !== action.id)
      return grocery

    case REMOVE_GROCERY:
      grocery = [...state, addToBag(action.id)]
      return grocery

    default:
      return state
  }

}

export default reducer