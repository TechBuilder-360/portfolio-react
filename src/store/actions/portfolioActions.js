import axios from "../../axios-orders";
import ax from "axios";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from 'react-cookies'


console.log(cookie.load('userData')['token']);
const headerToken = `JWT ${cookie.load('userData')['token']}`
console.log(headerToken);

const Personal_Information = (detail) => {
  return {
    type: actionType.PERSONAL_INFORMATION,
    detail: detail,
  };
};

const messages = (msg) => {
  return {
    type: actionType.PERSONAL_INFORMATION,
    detail: msg, // Array of messages
  };
};

export const set_personalInfo = (detail) => {
  return (dispatch) => {
    // axios.defaults.headers.common['Authorization'] = headerToken
    axios({ data: query.edit_personalinfo(detail), headers: {
      'Authorization': headerToken
    } })
    .then((response) => {
      console.log(response);
      dispatch(Personal_Information(detail));
      })
      .catch((err) => {
        console.log(err.response);
        console.error("Error: ",err);
        dispatch(messages([]));
      });
  };
};

export const setAvatar = () => {
  return {
    type: actionType.AVATAR_UPLOAD,
  };
};

export const AvatarUploadFailed = () => {
  return {
    type: actionType.AVATAR_UPLOAD_FAILED,
  };
};

export const avatar = (photo) => {
  return (dispatch) => {
    let formData = new FormData();

    formData.append("avatar", formData);
    ax.post("http://127.0.0.1:8000/api/avartar/", {
      data: photo,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CSRFTOKEN":
          "KNsdOUx8u7MSMNPcQdwn5FlrznsGJuhmoCByYyVqW2UHEXV66FC0fBBP2OYlhuJF",
      },
    })
      .then((response) => {
        console.log(response);
        // dispatch(setAvatar(response.data));
      })
      .catch((error) => {
        console.log("Error encountered");
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        console.log(error.config);
        console.error(error);
        // dispatch(AvatarUploadFailed())
      });
  };
};

export const Experience = () => {
  return {
    type: actionType.EXPERIENCE,
  };
};

export const Education = () => {
  return {
    type: actionType.EDUCATION,
  };
};

export const Projects = () => {
  return {
    type: actionType.PROJECTS,
  };
};

export const Skill = () => {
  return {
    type: actionType.SKILL,
  };
};

export const Social_Link = () => {
  return {
    type: actionType.SOCIAL_LINK,
  };
};

const add_education = (content) => {
  return {
    type: actionType.ADD_EDUCATION,
    payload: content,
  };
};

export const AddEducation = content =>{
    return dispatch => {
        content.id = Math.random()*100
        dispatch(add_education(content))
    }
}

export const delete_education = (index) => {
  return {
    type: actionType.DELETE_EDUCATION,
    payload: index,
  };
};


// export const delete_success = (id) => {
//   return {
//     type: actionType.DELETE_SUCCESS,
//     payload: id,
//   };
// };
