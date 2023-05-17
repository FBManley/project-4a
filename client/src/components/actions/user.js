export const loadUser = () => {
    return dispatch => {
      dispatch({ type: "user_loading" });
        fetch("/me")
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "user_loaded", payload: data });
            console.log("in loadUser action", data);
        })
        .catch(err => {
          dispatch({ type: "user_error", payload: err });
        });
    }
}
// export const loadUser = () => {
//   return {
//     type: "LOAD_USER",
//     payload: user
//   }
// }
export const addUser = (user) => {
    return {
      type: "ADD_USER",
      payload: user
    }
  }
  
// export const deleteUser = (user) => {
//     return {
//       type: "DELETE_USER",
//       payload: user
//     }
// }
// payload: data is from backend same as saying setUser(data)
// Actions are created by action creators, which are functions that return an action object. Action objects have a type property that indicates what type of action is being performed and any additional data necessary to make the change.
// When an action is dispatched, it is sent to the store using the store.dispatch() method. This method takes the action object as an argument.
// The store then passes the current state of the application and the dispatched action to the reducer function. The reducer function takes these inputs and returns a new state object that represents the updated state of the application.

// The store updates its internal state with the new state returned by the reducer, and notifies all subscribed components of the change.

// Components that are subscribed to the store using the connect() function from the react-redux library receive the updated state as props, and can use it to update their own state and re-render.
// what is the difference between a reducer and an action creator?
// A reducer is a function that takes the current state and an action as arguments, and returns a new state result. In other words, (state, action) => newState.
// An action creator is exactly that— a function that creates an action. It's easy to conflate the terms “action” and “action creator,” so do your best to use the proper term.
// The most common usage for Redux is for managing state that is global to a particular application, such as authentication status, or user preferences. 