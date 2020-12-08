import { instanceAxios, imageAxios } from "../../axios-orders";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from "react-cookies";

const userCookie = cookie.load("userData");
const headerToken = userCookie ? `JWT ${userCookie.token}` : null;

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
    instanceAxios({
      data: query.edit_personalinfo(detail),
      headers: {
        Authorization: headerToken,
      },
    })
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
    imageURL: url,
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
    imageAxios({
      data: formData,
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        dispatch(setAvatar(response.data.url));
      })
      .catch(() => {
        dispatch(AvatarUploadFailed());
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

const edit_education = (index, content) => {
  return {
    type: actionType.EDIT_EDUCATION,
    payload: {
      index: index,
      content: content,
    },
  };
};

const deleteEducation = (index) => {
  return {
    type: actionType.DELETE_EDUCATION,
    payload: index,
  };
};

export const educationAction = (index, edu) => {
  return (dispatch) => {
    instanceAxios({
      data: query.education(edu),
      headers: {
        Authorization: headerToken,
      },
    }).then((responce) => {
      if (!responce.data.errors) {
        let res = responce.data.data.education;
        if (res.created) {
          edu.id = res.education.id;
          dispatch(add_education(edu));
        } else {
          dispatch(edit_education(index, edu));
        }
      } else {
        console.log(responce.data.errors);
        // Dispatch Login required message or goto login page
      }
    });
  };
};

export const delete_education = (index) => {
  return dispatch => {
    instanceAxios({
      data: query.delete_education(index),
      headers: {
        Authorization: headerToken,
      },
    }).then((responce) => {
      if (!responce.data.errors) {
        let res = responce.data.data.removeEducation;
        if(res.ok){
          dispatch(deleteEducation(index));
        }
        else{
          console.log("Failed");
          // DISPATCH Message action
          // dispatch(deleteExperience_failed())
        }
      } else {
        console.log(responce.data.errors);
        // Dispatch Login required message or goto login page
      }
    });
  };
};

const add_experience = (content) => {
  return {
    type: actionType.ADD_EXPERIENCE,
    payload: content,
  };
};

export const experienceAction = (index, exp) => {
  return (dispatch) => {
    instanceAxios({
      data: query.experience(exp),
      headers: {
        Authorization: headerToken,
      },
    }).then((responce) => {
      if (!responce.data.errors) {
        let res = responce.data.data.experience;
        if (res.created) {
          exp.id = res.experience.id;
          dispatch(add_experience(exp));
        } else {
          dispatch(edit_experience(index, exp));
        }
      } else {
        console.log(responce.data.errors);
        // Dispatch Login required message or goto login page
      }
    });
  };
};

const deleteExperience = (index) => {
  return {
    type: actionType.DELETE_EXPERIENCE,
    payload: index,
  };
};

export const delete_experience = (index) => {
  return dispatch => {
    instanceAxios({
      data: query.delete_experience(index),
      headers: {
        Authorization: headerToken,
      },
    }).then((responce) => {
      if (!responce.data.errors) {
        let res = responce.data.data.removeExperience;
        if(res.ok){
          dispatch(deleteExperience(index));
        }
        else{
          console.log("Failed");
          // DISPATCH Message action
          // dispatch(deleteExperience_failed())
        }
      } else {
        console.log(responce.data.errors);
        // Dispatch Login required message or goto login page
      }
    });
  };
};

const edit_experience = (index, content) => {
  return {
    type: actionType.EDIT_EXPERIENCE,
    payload: {
      index: index,
      content: content,
    },
  };
};

export const add_project = (content) => {
  return {
    type: actionType.ADD_PORJECT,
    payload: content,
  };
};

export const projectAction = (index, proj) => {
  return (dispatch) => {
    if (proj.id) {
      dispatch(edit_project(index, proj));
    } else {
      proj.id = Math.random() * 100;
      dispatch(add_project(proj));
    }
  };
};

export const delete_project = (index) => {
  return {
    type: actionType.DELETE_PROJECT,
    payload: index,
  };
};

export const edit_project = (index, content) => {
  return {
    type: actionType.EDIT_PROJECT,
    payload: {
      index: index,
      content: content,
    },
  };
};
