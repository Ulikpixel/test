import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Styles from "./styles";
import store from "./store/store";
import Provider from "./Provider"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Styles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

