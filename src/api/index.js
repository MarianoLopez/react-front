import axios from 'axios'

const API_URL = "http://localhost:8081"

export const login = (username,password) => { return axios.post(API_URL+'/login',{username,password}) };
