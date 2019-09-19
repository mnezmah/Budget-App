import React from 'react'
import { connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList= (props) => {    
  console.log('expenseList prps:', props) 
  return (
    <div>
   {props.expenses.map(expense => {
     return <ExpenseListItem 
      key={expense.iod}
      desc={expense.description}
      amount={expense.amount}
      createdAt={expense.createdAt}
     />
   })}
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList)
