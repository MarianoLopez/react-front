const stateFromLocalStorage = JSON.parse(localStorage.getItem("userState"));

const init = {
    user: {
        isAuthenticated: false,
        credential: {
            username: '',
            token:'',
            enable:true,
            roles:[],
            expires:null
        }
    }
};

const defaultState = (Object.is(stateFromLocalStorage,undefined) || Object.is(stateFromLocalStorage,null))? init : Object.assign({},stateFromLocalStorage);

const reducer = (state=defaultState,action) => {
    switch (action.type){
        case "SUCCESS_LOGIN":{
            let toStore = {...state, isAuthenticated:true,user:{...state.user, credential:action.payload}};
            localStorage.setItem('userState', JSON.stringify(toStore));
            return toStore;
        }
        case "LOGOUT":{
            let toStore = Object.assign({},init);
            localStorage.setItem('userState', JSON.stringify(toStore));
            return toStore;
        }
        default:
            return state;
    }
};

export {reducer}