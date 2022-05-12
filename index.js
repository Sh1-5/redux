import store from './store/index.js'

import {
  increment,
  decrement,
  addNumber,
  subNumber
} from './store/actionCreators.js'

store.subscribe(() => {
  console.log('state发生了改变', store.getState().counter)
})

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(addNumber(15))
store.dispatch(subNumber(15))
