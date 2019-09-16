import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'

const AddExpensePage = () => (
  <div>This is from my Add Expense</div>
)

const EditExpensePage = () => (
  <div>This is from my Edit Expense</div>
)

const HelpPage = () => (
  <div>This is from my HelpPage</div>
)

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Budget App</h1>
    <NavLink exact to="/" activeClassName="is-active" > Home</NavLink> |
    <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink> |
    <NavLink to="/edit" activeClassName="is-active"> Edit Expense</NavLink> |
    <NavLink to="/help" activeClassName="is-active"> Help</NavLink>

  </header>
)

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter