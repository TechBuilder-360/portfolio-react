import React from "react";
import classes from "./pre-auth.module.css";
import { Link } from "react-router-dom";
import Layout from '../../container/Layout/Layout'
import axios from 'axios'

// const fetchInfo = () =>{
//   let username = 'Adegunwa'
//   axios.post('http://127.0.0.1:8000/graphql/',
//     {
//       query: `
//         query get_user {
//           getPersonalInfo(username: "${username}"){
//             id
//             firstName
//             lastName
//             gender
//             bio
//             profession
//           }
//          }
//       `
//     }).then((result) => {
//       console.log(result.data)
//     }).catch(error=>{
//       console.log("Message: " + error.message);
//       console.log("Request: " + error.request);
//       console.log("Response: " + {...error.response});
//       console.log("Error: " + error);
//     })
// }

const Home = () => {
  
  return (
    <Layout>
    <div className={classes.Wrapper}>
      <p className="title">Home</p>
      <p>Coming soon</p>
      <Link to='/login' className="btn btn-success btn-secondary">
        Get Started
      </Link>
      {/* <button onClick={fetchInfo} className="btn btn-primary">
        Graphql request
      </button> */}
    </div>
    </Layout>
  );
};

export default Home;
