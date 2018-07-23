const axios = require('axios')

let url = "http://localhost:8081";

export const login = (username,password) => {
    return axios.post(url+'/login',{username,password});
};

