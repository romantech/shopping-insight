import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import rootReducer from './modules';
import App from './App';
import './styles/index.css';
import GlobalStyle from './styles/globalStyle';

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
      </PersistGate>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
