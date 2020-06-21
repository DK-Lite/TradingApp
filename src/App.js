import React from 'react';
import './App.css';

//redux
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'ducks/reducer';
import rootSaga from 'ducks/saga';
import { Provider } from 'react-redux';

import AppRoute from 'components/AppRoute'

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const makedStore = (init) =>{
  const store = createStore(
    rootReducer, 
    init, 
    devTools(
      applyMiddleware(sagaMiddleware),
    ),
  )
  sagaMiddleware.run(rootSaga);
  return store;
}



const App = () => {
  return (
    <Provider store={makedStore()}>
      <AppRoute/>
    </Provider>
  );
}

export default App;
