import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ iod, dispatch, description, amount, createdAt }) => {
  return (
    <Link to={`/edit/${iod}`}>
      <p>{description} | {amount} | {createdAt}</p>
      <button onClick={() => {
        dispatch(removeExpense({iod}))
      }}>Remove</button>
    </Link>
  )
}


export default connect()(ExpenseListItem)