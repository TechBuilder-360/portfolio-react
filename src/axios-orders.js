import axios from 'axios';


const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/graphql/", //"https://xportfolio.herokuapp.com/graphql/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
    responseType: 'json',
    method: 'post'
})

export default instance;