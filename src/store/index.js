import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {login} from '../api'


const stateFromLocalStorage = JSON.parse(localStorage.getItem("userState"));

const init = {
    isAuthenticated:false,
    username:'',
    token:'',
    enable:true,
    roles:[],
    expires:null
}

const defaultState = (Object.is(stateFromLocalStorage,undefined) || Object.is(stateFromLocalStorage,null))? init : Object.assign({isAuthenticated: true},stateFromLocalStorage);

console.log("default state",defaultState);


const reduce = (state=defaultState,action) => {
 switch (action.type){
     case "LOGIN": {
         login(action.payload.username,action.payload.password)
             .then(res=>{
                 userStore.dispatch({"type":"SUCCESS_LOGIN","payload":res.data});
             }).catch(err=>{
                console.log("login error",err)
         });
         break;
     }
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

const userStore = createStore(reduce,applyMiddleware(logger));

export {userStore}