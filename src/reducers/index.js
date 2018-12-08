import grocery from './groceryReducer'
import { shopping } from './shoppingReducer'
import pocketMoney from './moneyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  grocery,
  shopping,
  pocketMoney
})

export default rootReducer