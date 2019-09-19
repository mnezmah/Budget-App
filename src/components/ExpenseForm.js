import React, { Component } from 'react'

export default class ExpenseForm extends Component {

  state = {
    description: '',
    note: '',
    amount: ''
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
          <textarea value={this.state.note}
            onChange={this.onNoteChange} placeholder="Add a note for your expense"></textarea>
          <button>Add Expensese</button>
        </form>
      </div>
    )
  }
}
