import { instanceAxios, imageAxios } from "../../axios-orders";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from "react-cookies";
import { loadingStart, loadingStop, logError } from "../actions/auth";

const userCookie = cookie.load("userData");
const headerToken = userCookie ? `JWT ${userCookie.token}` : null;

const fetch_portfolio = (response) => {
  return {
    type: actionType.FETCH_PORTFOLIO,
    payload: response,
  };
};

export const fetchPortfolio = (username) => {
  return (dispatch) => {
    dispatch(loadingStart());
    instanceAxios({
      data: query.portfolio(username),
    })
      .then((response) => {
        let res = response.data.data;
          dispatch(fetch_portfolio(res));
          dispatch(loadingStop());
      })
      .catch((err) => {
        console.error(err);
        dispatch(loadingStop());
        // dispatch(messages([]));
      });
  };
};

const Personal_Information = (detail) => {
  return {
    type: actionType.PERSONAL_INFORMATION,
    detail: detail,
  };
};

const messages = (msg) => {
  return {
    type: actionType.MESSAGES,
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
        // Authorization: headerToken,
      },
    })
      .then((response) => {
        dispatch(setAvatar(response.data.url));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(AvatarUploadFailed());
        dispatch(logError(["An error occured"]))
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

const addSocialLink = (data) => {
  return {
    type: actionType.ADD_SOCIAL_LINK,
    payload: data,
  };
};

const editSocialLink = (data) => {
  return {
    type: actionType.EDIT_SOCIAL_LINK,
    payload: data,
  };
};

export const socialAction = (req) => {
  return (dispatch) => {
    instanceAxios({
      data: query.social(req),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.social;
          if (res.created) {
            req.id = res.social.id;
            dispatch(addSocialLink(req));
          } else {
            dispatch(editSocialLink(req));
          }
        } else {
          console.log(response.data.errors);
          // Dispatch Login required message or goto login page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteSocialLink = (id) => {
  return {
    type: actionType.DELETE_SOCIAL_LINK,
    id: id,
  };
};

export const delete_social = (index) => {
  return (dispatch) => {
    instanceAxios({
      data: query.remove_social(index),
      headers: {
        Authorization: headerToken,
      },
    }).then((response) => {
      if (!response.data.errors) {
        let res = response.data.data.removeSocial;
        if (res.ok) {
          dispatch(deleteSocialLink(index));
        } else {
          console.log(res.warning);
          // DISPATCH Message action
        }
      } else {
        console.log(response.data.errors);
        // Dispatch Login required message or goto login page
      }
    });
  };
};

const add_education = (content) => {
  return {
    type: actionType.ADD_EDUCATION,
    payload: content,
  };
};

const edit_education = (content) => {
  return {
    type: actionType.EDIT_EDUCATION,
    payload: content,
  };
};

const deleteEducation = (index) => {
  return {
    type: actionType.DELETE_EDUCATION,
    payload: index,
  };
};

export const educationAction = (edu) => {
  return (dispatch) => {
    instanceAxios({
      data: query.education(edu),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.education;
          if (res.created) {
            edu.id = res.education.id;
            dispatch(add_education(edu));
          } else {
            dispatch(edit_education(edu));
          }
        } else {
          console.log(response.data.errors);
          // Dispatch Login required message or goto login page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const delete_education = (index) => {
  return (dispatch) => {
    instanceAxios({
      data: query.delete_education(index),
      headers: {
        Authorization: headerToken,
      },
    }).then((response) => {
      if (!response.data.errors) {
        let res = response.data.data.removeEducation;
        if (res.ok) {
          dispatch(deleteEducation(index));
        } else {
          console.log("Failed");
          // DISPATCH Message action
          // dispatch(deleteExperience_failed())
        }
      } else {
        console.log(response.data.errors);
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

export const experienceAction = (exp) => {
  return (dispatch) => {
    instanceAxios({
      data: query.experience(exp),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.experience;
          if (res.created) {
            exp.id = res.experience.id;
            dispatch(add_experience(exp));
          } else {
            dispatch(edit_experience(exp));
          }
        } else {
          console.log(response.data.errors);
          // Dispatch Login required message or goto login page
        }
      })
      .catch((err) => {
        console.error(err);
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
  return (dispatch) => {
    instanceAxios({
      data: query.delete_experience(index),
      headers: {
        Authorization: headerToken,
      },
    }).then((response) => {
      if (!response.data.errors) {
        let res = response.data.data.removeExperience;
        if (res.ok) {
          dispatch(deleteExperience(index));
        } else {
          console.log(res.warning);
          // DISPATCH Message action
          // dispatch(deleteExperience_failed())
        }
      } else {
        console.log(response.data.errors);
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

const add_project = (content) => {
  return {
    type: actionType.ADD_PORJECT,
    payload: content,
  };
};

const edit_project = (content) => {
  return {
    type: actionType.EDIT_PROJECT,
    content: content,
  };
};

const delete_project = (index) => {
  return {
    type: actionType.DELETE_PROJECT,
    payload: index,
  };
};

export const projectAction = (request) => {
  return (dispatch) => {
    instanceAxios({
      data: query.mutate_project(request),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.project;
          if (res.created) {
            dispatch(add_project({ ...request, id: res.project.id }));
          } else {
            dispatch(edit_project(request));
          }
        }
        console.log(response.data.errors);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteProject = (index) => {
  return (dispatch) => {
    instanceAxios({
      data: query.remove_project(index),
      headers: {
        Authorization: headerToken,
      },
    }).then((response) => {
      if (!response.data.errors) {
        let res = response.data.data.removeProject;
        if (res.ok) {
          dispatch(delete_project(index));
        } else {
          console.log(res.warning);
        }
      } else {
        console.log(response.data.errors);
      }
    });
  };
};

const add_skill = (id, title) => {
  return {
    type: actionType.SKILL,
    skill: { id, title },
  };
};

const edit_skill = (content) => {
  return {
    type: actionType.EDIT_SKILL,
    payload: content,
  };
};

const delete_skill = (index) => {
  return {
    type: actionType.DELETE_SKILL,
    payload: index,
  };
};

export const skillAction = (request) => {
  return (dispatch) => {
    instanceAxios({
      data: query.mutate_skill(request),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.skill;
          if (res.created) {
            dispatch(add_skill(res.skill.id, request.title));
          } else {
            dispatch(edit_skill(request));
          }
        } else {
          console.log(response.data.errors);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeSkill = (id) => {
  return (dispatch) => {
    instanceAxios({
      data: query.delete_skill(id),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeSkill;
          if (res.ok) {
            dispatch(delete_skill(id));
          } else {
            console.log(res.warning);
          }
        } else {
          console.log("Error: " + response.data.errors);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const add_subskill = (req) => {
  return {
    type: actionType.SUBSKILL,
    payload: req,
  };
};

export const subskillAction = (skill, title) => {
  return (dispatch) => {
    instanceAxios({
      data: query.subSkill(skill, title),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.subSkill;
          if (res.created) {
            dispatch(add_subskill({ skill, title, id: res.subSkill.id }));
          }
        } else {
          console.log(response.data.errors);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const delete_subskill = (id) => {
  return {
    type: actionType.DELETE_SUBSKILL,
    payload: id,
  };
};

export const deleteSubskillAction = (id) => {
  return (dispatch) => {
    instanceAxios({
      data: query.remove_subskill(id),
      headers: {
        Authorization: headerToken,
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeSubskill;
          if (res.ok) {
            dispatch(delete_subskill(id));
          } else {
            console.log(res.warning);
          }
        } else {
          console.log("Error: " + response.data.errors);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
