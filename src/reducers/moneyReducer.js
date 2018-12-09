import { ADD_POCKET_MONEY, REMOVE_POCKET_MONEY } from '../action'
import { addToBag } from './helper'


const pocketMoney = (state = 50, action) => {
  switch (action.type) {
    case ADD_POCKET_MONEY:
      let item = addToBag(action.id)
      let money = state + item.cost
      return money
    case REMOVE_POCKET_MONEY:
      item = addToBag(action.id)
      money = state - item.cost
      return money

    default:
      return state
  }
}

export default pocketMoney