import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
// import postReducer from './components/reducers/postReducer';
// export default = not a named export
import rootReducer from './components/reducers/reducer';
import * as actions from './components/actionTypes';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

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
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// reducers are functions that return a piece of the state-> currently an empty array
// console.log("store-indexjs", store)
//   store.dispatch(userAdded("user1"))
// provider-provides the store- global state to the app. addMovies lives. Reducers. Access state (lives in store) vs modifying state. useSelector hook- takes in callback, then we seelct out of store what state we want.
// component -> useSelector->store->store.reducer
// component -> addMovie -> dispatchAction-> type:ADD_MOVIE, payload: movie
ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}> 
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
