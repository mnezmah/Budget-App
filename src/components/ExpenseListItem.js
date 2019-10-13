import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
      <p>
        {numeral(amount / 100).format('$0,0.00')}
        {moment(createdAt).format('MMMM DO, YYYY')}
      </p>
    </Link>
  )
}



export default ExpenseListItem