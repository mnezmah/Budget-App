import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

test('should render EditExpensePage correctly', () => {
  const wrapper = shallow(<EditExpensePage />)
  expect(wrapper).toMatchSnapshot()
})