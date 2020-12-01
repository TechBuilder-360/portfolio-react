import axios from "../../axios-orders";
import ax from "axios";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from 'react-cookies'


console.log(cookie.load('userData')['token']);
const headerToken = `JWT ${cookie.load('userData')['token']}`

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

export const delete_education = (index) => {
  return {
    type: actionType.DELETE_EDUCATION,
    payload: index,
  };
};

const edit_education = (index, content) => {
  return {
    type: actionType.EDIT_EDUCATION,
    payload: {
      'index':index,
      'content':content
    }
  };
};

export const educationAction = (index, edu) => {
  return dispatch => {
    if(edu.id){
      edu.id = Math.random()*100
      dispatch(add_education(edu))
    }
    else
      dispatch(edit_education(index, edu))
  }
}



export const add_experience = (content) => {
  content.id = Math.random()*100
  return {
    type: actionType.ADD_EXPERIENCE,
    payload: content,
  };
};


export const delete_experience = (index) => {
  return {
    type: actionType.DELETE_EXPERIENCE,
    payload: index,
  };
};

export const edit_experience = (index, content) => {
  return {
    type: actionType.EDIT_EXPERIENCE,
    payload: {
      'index':index,
      'content':content
    }
  };
};


export const add_project = (content) => {
  content.id = Math.random()*100
  return {
    type: actionType.ADD_PORJECT,
    payload: content,
  };
};


export const delete_project = (index) => {
  return {
    type: actionType.DELETE_PROJECT,
    payload: index,
  };
};

export const edit_project = (index,content) => {
  return {
    type: actionType.EDIT_PROJECT,
    payload: {
      'index':index,
      'content':content
    }
  };
};


