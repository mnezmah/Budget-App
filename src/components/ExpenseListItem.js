import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => {
  return (
    <Link to={`/edit/${id}`}>
      <p>{description} | {amount} | {createdAt}</p>
      <button onClick={() => {
        dispatch(removeExpense({ id }))
      }}>Remove</button>
    </Link>
  )
}

export default connect()(ExpenseListItem)