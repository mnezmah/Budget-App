import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Budget App</h1>
          <NavLink exact to="/" activeClassName="is-active" > Home</NavLink> |
    <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink> |
    <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
        </header>
      </div>
    )
  }
}
