const stateFromLocalStorage = JSON.parse(localStorage.getItem("userState"));

//TODO: refactor user.credential
const init = {
    isAuthenticated:false,
    username:'',
    token:'',
    enable:true,
    roles:[],
    expires:null
};

const defaultState = (Object.is(stateFromLocalStorage,undefined) || Object.is(stateFromLocalStorage,null))? init : Object.assign({isAuthenticated: true},stateFromLocalStorage);

const reducer = (state=defaultState,action) => {
    switch (action.type){
        case "SUCCESS_LOGIN":{
            localStorage.setItem('userState', JSON.stringify(action.payload));
            return Object.assign({},state,action.payload,{isAuthenticated:true});
        }
        case "LOGOUT":{
            localStorage.setItem('userState', JSON.stringify(init));
            return Object.assign({},init);
        }
        default:
            break;
    }
    return state;
};

export {reducer}