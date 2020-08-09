import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalState from './context/GlobalContext';
import PaymentModalState from './context/PaymentModalContext';
import './styles/base.css';

ReactDOM.render(
  
    <PaymentModalState>
      <GlobalState>
        <App />
      </GlobalState>
    </PaymentModalState>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
