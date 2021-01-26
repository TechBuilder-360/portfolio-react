import { instanceAxios, imageAxios, url } from "../../axios-orders";
import Axios from "axios";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from "react-cookies";
import FileDownload from "js-file-download";
import { loadingStart, loadingStop } from "../actions/auth";

const headerToken = () => {
  const userCookie = cookie.load("userData");
  return `JWT ${userCookie.token}`;
};

export const messages = (msg, status) => {
  return {
    type: actionType.MESSAGES,
    detail: {
      messages: typeof msg == "string" ? [msg] : msg,
      alert: status,
    },
  };
};

export const clearMessages = () => {
  return {
    type: actionType.CLEAR_MESSAGES,
  };
};

export const redirect = () => {
  return {
    type: actionType.REDIRECT,
  };
};

export const clearRedirect = () => {
  return {
    type: actionType.CLEAR_REDIRECT,
  };
};

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
        dispatch(clearRedirect());
        dispatch(loadingStop());
      })
      .catch((err) => {
        dispatch(redirect());
        dispatch(loadingStop());
      });
  };
};

const Personal_Information = (detail) => {
  return {
    type: actionType.PERSONAL_INFORMATION,
    detail: detail,
  };
};

export const set_personalInfo = (detail) => {
  return (dispatch) => {
    instanceAxios({
      data: query.edit_personalinfo(detail),
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          dispatch(Personal_Information(detail));
          dispatch(messages("Profile was updated successfully", "success"));
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

const setAvatar = (url) => {
  return {
    type: actionType.AVATAR_UPLOAD,
    imageURL: url,
  };
};

export const avatar = (photo) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("image", photo);
    imageAxios({
      data: formData,
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          dispatch(setAvatar(response.data.url));
          dispatch(messages("Image was updated successfully", "success"));
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.social;
          if (res.created) {
            req.id = res.social.id;
            dispatch(addSocialLink(req));
            dispatch(
              messages(`${req.label} has been added successfully`, "success")
            );
          } else {
            dispatch(editSocialLink(req));
            dispatch(
              messages(`${req.label} has been updated successfully`, "success")
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeSocial;
          if (res.ok) {
            dispatch(deleteSocialLink(index));
            dispatch(messages(`Social Contact has been removed`, "success"));
          } else {
            dispatch(messages(res.warning, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.education;
          if (res.created) {
            edu.id = res.education.id;
            dispatch(add_education(edu));
            dispatch(
              messages(
                `${edu.institution} has been added successfully`,
                "success"
              )
            );
          } else {
            dispatch(edit_education(edu));
            dispatch(
              messages(
                `${edu.institution} has been updated successfully`,
                "success"
              )
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

export const delete_education = (index) => {
  return (dispatch) => {
    instanceAxios({
      data: query.delete_education(index),
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeEducation;
          if (res.ok) {
            dispatch(deleteEducation(index));
            dispatch(messages(`Education has been removed`, "success"));
          } else {
            dispatch(messages(res.message, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.experience;
          if (res.created) {
            exp.id = res.experience.id;
            dispatch(add_experience(exp));
            dispatch(
              messages(
                `${exp.organization} has been added successfully`,
                "success"
              )
            );
          } else {
            dispatch(edit_experience(exp));
            dispatch(
              messages(
                `${exp.organization} has been updated successfully`,
                "success"
              )
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeExperience;
          if (res.ok) {
            dispatch(deleteExperience(index));
            dispatch(messages(`Experience has been removed`, "success"));
          } else {
            dispatch(messages(res.message, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
    payload: content,
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.project;
          if (res.created) {
            dispatch(add_project({ ...request, id: res.project.id }));
            dispatch(
              messages(
                `${request.title} has been added successfully`,
                "success"
              )
            );
          } else {
            dispatch(edit_project(request));
            dispatch(
              messages(
                `${request.title} has been updated successfully`,
                "success"
              )
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

export const deleteProject = (index) => {
  return (dispatch) => {
    instanceAxios({
      data: query.remove_project(index),
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeProject;
          if (res.ok) {
            dispatch(delete_project(index));
            dispatch(messages(`Project has been removed`, "success"));
          } else {
            dispatch(messages(res.message, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.skill;
          if (res.created) {
            dispatch(add_skill(res.skill.id, request.title));
            dispatch(
              messages(
                `${request.title} has been added successfully`,
                "success"
              )
            );
          } else {
            dispatch(edit_skill(request));
            dispatch(
              messages(
                `${request.title} has been updated successfully`,
                "success"
              )
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

export const removeSkill = (id) => {
  return (dispatch) => {
    instanceAxios({
      data: query.delete_skill(id),
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeSkill;
          if (res.ok) {
            dispatch(delete_skill(id));
            dispatch(messages(`Skill has been removed`, "success"));
          } else {
            dispatch(messages(res.message, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.subSkill;
          if (res.created) {
            dispatch(add_subskill({ skill, title, id: res.subSkill.id }));
            dispatch(
              messages(`${title} has been added successfully`, "success")
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
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
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeSubskill;
          if (res.ok) {
            dispatch(delete_subskill(id));
            dispatch(messages(`Sub-skill has been removed`, "success"));
          } else {
            dispatch(messages(res.warning, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

const download_resume = () => {
  return {
    type: actionType.DOWNLOAD_RESUME,
  };
};

export const downloadResume = (username, lastname) => {
  return (dispatch) => {
    Axios({
      url: `${url}/resume/download/${username}/`,
      method: "GET",
      responseType: "blob", // Important
    })
      .then((response) => {
        FileDownload(response.data, `${lastname}'s resume.pdf`);
        dispatch(download_resume());
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

const add_accomplishment = (content) => {
  return {
    type: actionType.ADD_ACCOMPLISHMENT,
    payload: content,
  };
};

const edit_accomplishment = (content) => {
  return {
    type: actionType.EDIT_ACCOMPLISHMENT,
    payload: content,
  };
};

const delete_accomplishment = (index) => {
  return {
    type: actionType.DELETE_ACCOMPLISHMENT,
    payload: index,
  };
};

export const accomplishmentAction = (request) => {
  return (dispatch) => {
    instanceAxios({
      data: query.mutate_accomplishment(request),
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.accomplishment;
          if (res.created) {
            dispatch(add_accomplishment({ ...request, id: res.id }));
            dispatch(
              messages(
                `${request.course} has been added successfully`,
                "success"
              )
            );
          } else {
            dispatch(edit_accomplishment(request));
            dispatch(
              messages(
                `${request.course} has been updated successfully`,
                "success"
              )
            );
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};

export const deleteAccomplishment = (index) => {
  return (dispatch) => {
    instanceAxios({
      data: query.remove_accomplishment(index),
      headers: {
        Authorization: headerToken(),
      },
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.removeAccomplishment;
          if (res.ok) {
            dispatch(delete_accomplishment(index));
            dispatch(messages(`Accomplishment has been removed`, "success"));
          } else {
            dispatch(messages(res.message, "warning"));
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          dispatch(messages(error, "danger"));
        }
      })
      .catch((err) => {
        dispatch(messages(err.message, "danger"));
      });
  };
};