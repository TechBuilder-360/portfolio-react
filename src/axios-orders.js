import axios from 'axios';


const instance = axios.create({
    baseURL: "https://xportfolio.herokuapp.com/graphql/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    },
    responseType: 'json',
    method: 'post'
})

export default instance;