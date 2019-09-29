import expensesReducer from '../../reducers/expenses'

test('should set the default state', ()=>{
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should', () => {

  expect().toEqual()
})