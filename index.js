import store from './store/index.js'

import {
  increment,
  decrement,
  addAction,
  subAction
} from './store/actionCreators.js'

store.subscribe(() => {
  console.log('state发生了改变', store.getState().counter)
})

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(addAction(15))
store.dispatch(subAction(15))
