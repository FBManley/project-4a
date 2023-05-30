export  const loadSocials = () => {
    return dispatch => {
        fetch("/socials")
        .then(response => response.json())
        .then(data => {
            const action = {type: "LOAD_SOCIALS", payload: data}
            dispatch(action)
            console.log("in loadSocials action", data)
        })
    }
}

export const updateSocials = (social) => {
    return {
        type: "UPDATE_SOCIALS",
        payload: social
    }
}

export const userSocials = () => {
    return dispatch => {
      fetch("/user/socials") 
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user socials data.');
          }
        })
        .then(data => {
          const action = { type: "USER_SOCIALS", payload: data };
          dispatch(action);
          console.log("In userSocials action", data);
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    };
  };
// export const userSocials = () => {
//     return dispatch => {
//         fetch("/socials")
//         .then(response => response.json())
//         .then(data => {
//             const action = {type: "USER_SOCIALS", payload: data}
//             dispatch(action)
//             console.log("in userSocials action", data)
//         })
//     }
// }