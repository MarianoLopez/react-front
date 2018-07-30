
export const logout = () => {
    return dispatch => {
        dispatch({type:"LOGOUT"});
    }
};

export const successLogin = (payload) => {
    return dispatch => {
        dispatch({type:"SUCCESS_LOGIN", payload});
    }
};