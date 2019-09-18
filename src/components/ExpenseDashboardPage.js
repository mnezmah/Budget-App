import React, { Component } from 'react'
import ExpenseList from './ExpenseList'

export default class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        Hello from Expense Dashboard page
        <ExpenseList>

        </ExpenseList>
      </div>
    )
  }
}
