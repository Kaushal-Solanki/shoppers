import { ADD_GROCERY, REMOVE_GROCERY } from '../action'
import { addToBag } from './helper'


export const shopping = (state = [], action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let shopping = [...state, addToBag(action.id)]
      console.log('chk shopping', shopping)
      return shopping
    case REMOVE_GROCERY:
      shopping = state.filter(item => item.id !== action.id)
      return shopping

    default:
      return state
  }

}



