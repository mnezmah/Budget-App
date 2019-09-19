import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ iod, dispatch, description, amount, createdAt }) => {
  return (
    <div>
      <p>{description} | {amount} | {createdAt}</p>
      <button onClick={() => {
        dispatch(removeExpense({iod}))
      }}>Remove</button>
    </div>
  )
}


export default connect()(ExpenseListItem)