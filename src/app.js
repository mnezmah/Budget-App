import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { sortByDate } from './actions/filters';

const store = configureStore()

console.log(sortByDate.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'));
