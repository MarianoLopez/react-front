import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {login} from '../api'

const defaultState = {
    isAuthenticated:false,
    username:'',
    token:'',
    enable:true,
    roles:[],
    expires:null
};

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
         return Object.assign({},state,action.payload,{isAuthenticated:true});
     }
 }
 return state;
};

const userStore = createStore(reduce,applyMiddleware(logger));

export {userStore}