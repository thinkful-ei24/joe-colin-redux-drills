import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import InterestCalculator from './components/interest-calculator';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <InterestCalculator />
  </Provider>,
    document.getElementById('root')
    );
