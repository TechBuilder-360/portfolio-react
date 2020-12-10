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
      index: index,
      content: content,
    },
  };
};

export const educationAction = (index, edu) => {
  return (dispatch) => {
    if (edu.id) {
      dispatch(edit_education(index, edu));
    } else {
      edu.id = Math.random() * 100;
      dispatch(add_education(edu));
    }
  };
};

export const add_experience = (content) => {
  return {
    type: actionType.ADD_EXPERIENCE,
    payload: content,
  };
};

export const experienceAction = (index, expp) => {
  return (dispatch) => {
    if (expp.id) {
      dispatch(edit_experience(index, expp));
    } else {
      expp.id = Math.random() * 100;
      dispatch(add_experience(expp));
    }
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
      index: index,
      content: content,
    },
  };
};

export const add_project = (content) => {
  content.id = Math.random() * 100;
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

const add_skill = () => {
  return {
    type: actionType.SKILL,
  };
};

const edit_skill = (index,content) => {
  return {
    type: actionType.EDIT_SKILL,
    payload:{
    index:index,
    content:content,
  }
}
};

const delete_skill = (index) => {
  return {
    type: actionType.DELETE_SKILL,
    payload: index,
  };
};

export const skill = (title) => {
  return dispatch => {
    // instanceAxios({query.})
  }
}

export const edit_subskill = (index,content) => {
  content.id = Math.random() * 100;
  return {
    type: actionType.EDIT_SUBSKILL,
    payload: 
    {
      index:index,
      content:content,
    }
  };
};

export const delete_subskill = (index,id) => {
  return {
    type: actionType.DELETE_SUBSKILL,
    payload: {index:index,
    id:id
    }
  };
};
