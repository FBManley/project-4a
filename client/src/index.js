import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
// import postReducer from './components/reducers/postReducer';
// export default = not a named export
import rootReducer from './components/reducers/reducer';
import * as actions from './components/actionTypes';
import thunk from 'redux-thunk';

// const reducer = () => {
//   return []
// }
// const reducer = (state = [], action) => {
//   if (action.type === "useradded")
//     return [...state, 
//   {
//    id: 1,
//   description: "First Post", 
//   resolved: false
//   }
// ];
// elseif (action.type === "userdeleted")
//   return state.filter((user) => user.id !== action.payload);
// // }
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// reducers are functions that return a piece of the state-> currently an empty array
console.log(store)
//   store.dispatch(userAdded("user1"))

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
