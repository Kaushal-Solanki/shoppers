import { ADD_POCKET_MONEY, REMOVE_POCKET_MONEY } from '../action'


const pocketMoney = (state = 50, action) => {
  switch (action.type) {
    case ADD_POCKET_MONEY:
      console.log('chk money')
      return state
    case REMOVE_POCKET_MONEY:
      return state

    default:
      return state
  }
}

export default pocketMoney