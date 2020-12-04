import {instanceAxios, imageAxios} from "../../axios-orders";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from 'react-cookies'

// TODO: This headerToken has to be tested to ensure that it changes whenever a new value is set
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
    instanceAxios({ data: query.edit_personalinfo(detail), headers: {
      'Authorization': headerToken
    } })
    .then((response) => {
      dispatch(Personal_Information(detail));
      })
      .catch(() => {
        dispatch(messages([]));
      });
  };
};

const setAvatar = (url) => {
  return {
    type: actionType.AVATAR_UPLOAD,
    imageURL: url
  };
};

const AvatarUploadFailed = () => {
  return {
    type: actionType.AVATAR_UPLOAD_FAILED,
  };
};

export const avatar = (photo) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("image", photo);
    imageAxios({data: formData,
        headers: {
          'Authorization': headerToken
        }
    })
      .then((response) => {
        dispatch(setAvatar(response.data.url));
      })
      .catch(() => {
        dispatch(AvatarUploadFailed())
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
