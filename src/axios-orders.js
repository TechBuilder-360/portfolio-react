import axios from 'axios';


// const url = "https://xportfolio.herokuapp.com"
const url = "http://127.0.0.1:8000"

export const instanceAxios = axios.create({
    baseURL: `${url}/graphql/`, 
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
    responseType: 'json',
    method: 'post'
})

export const imageAxios = axios.create({
    baseURL: `${url}/accounts/upload/`,
    timeout: 30000,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    responseType: 'json',
    method: 'post'
})