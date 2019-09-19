import React from 'react'

const ExpenseListItem = (props) => {
  const {desc, amount, createdAt} = props
  console.log('PROPS ARE:', props)
  return (
    <div>
      <p>{desc} | {amount} | {createdAt}</p>
    </div>
  )
}

export default ExpenseListItem