import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import GlobalStyle from 'styles/globalStyle';
import { isProd } from 'lib/utils';
import rootReducer, { rootSaga } from './modules';
import App from './App';
import 'styles/index.css';

const sagaMiddleware = createSagaMiddleware();
const enhancer = isProd
  ? compose(applyMiddleware(sagaMiddleware))
  : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

// 선언한 Saga 미들웨어에 등록하고 미들웨어는 계속해서 액션 감지
sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root') as Element;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
      </PersistGate>
      <App />
    </Provider>
  </React.StrictMode>,
);
