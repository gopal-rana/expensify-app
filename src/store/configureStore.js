import {createStore, combineReducers} from 'redux';
import expenseReducer from './../reducers/expenses';
import filtertReducer from './../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filtertReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
