import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <Link to={`/edit/${id}`}>
      <p>{description} | {amount} | {createdAt}</p>
    </Link>
  )
}

export default ExpenseListItem