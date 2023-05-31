import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
// import postReducer from './components/reducers/postReducer';
// export default = not a named export
import rootReducer from './components/reducers/Reducer';
import * as actions from './components/actionTypes';
import thunk from 'redux-thunk';



import { composeWithDevTools } from '@redux-devtools/extension';
import {BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
