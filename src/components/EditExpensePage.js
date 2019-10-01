import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { removeExpense, editExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onClickHandler = () => {
    this.props.dispatch(removeExpense({ id: this.props.expense.id }))
    this.props.history.push('/')
  }

  render() {
    const {
      props,
    } = this;

    console.log(props)
    return (
      <div>
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(editExpense(expense.id, expense))
            props.history.push('/')
            console.log('updated', expense)
          }} />
        <button
          onClick={this.onClickHandler}
        >Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: () => dispatch(removeExpense())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)