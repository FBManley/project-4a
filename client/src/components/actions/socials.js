export const loadSocials = () => {
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

  