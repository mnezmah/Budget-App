import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends Component {

  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  }

  onDescriptionChange = (e) => {
    this.setState(
      { description: e.target.value }
    )
  }

  onNoteChange = (e) => {
    this.setState({ note: e.target.value })
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    this.setState({ createdAt })
  }

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused })
  }

  render() {
    console.log('STATE:', this.state)
    return (
      <div>
        <form action="">
          <input
            value={this.state.description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="Description"
            autoFocus />
          <input
            type="number"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount" />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
          />

          <textarea value={this.state.note}
            onChange={this.onNoteChange} placeholder="Add a note for your expense"></textarea>
          <button>Add Expensese</button>
        </form>
      </div>
    )
  }
}
