import { createStore, combineReducers, applyMidlleware } from "redux";
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = wodow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMidlleware(thunk))
  )
  return store
}
u