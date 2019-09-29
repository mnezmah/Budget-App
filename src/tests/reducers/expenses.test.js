import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set the default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})


test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add new expense', () => {
  const expense = {
    id: '5',
    description: 'Laptop',
    note: '',
    createdAt: 5222,
    amount: 15000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state.length).toBe(4)
})

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 6,
    text: 'new text'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: 
    {text: 'new text'}
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].text).toBe('new text')
})