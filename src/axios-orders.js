import axios from 'axios';


const url = "http://127.0.0.1:8000" //"https://xportfolio.herokuapp.com",

export const instanceAxios = axios.create({
    baseURL: `${url}/graphql/`, 
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
    responseType: 'json',
    method: 'post'
})

export const imageAxios = axios.create({
    baseURL: `${url}/accounts/upload/`,
    timeout: 3000,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    responseType: 'json',
    method: 'post'
})