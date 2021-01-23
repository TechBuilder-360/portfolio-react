import { instanceAxios, imageAxios, url } from "../../axios-orders";
import Axios from "axios";
import * as actionType from "./actionType";
import * as query from "./graphqlQuery";
import cookie from "react-cookies";
import FileDownload from "js-file-download";
import { loadingStart, loadingStop } from "../actions/auth";
import { message } from "antd";

export const headerToken = () => {
  const userCookie = cookie.load("userData");
  return `JWT ${userCookie.token}`;
};

export const alertDuration = 10; //seconds

export const messages = (msg, status) => {
  msg = msg || ""
  return {
    type: actionType.MESSAGES,
    detail: {
      messages: typeof msg == "string" ? [msg] : msg,
      alert: status || "",
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
          let res = response.data.data.personalInfo;
          if (res.ok) {
            dispatch(Personal_Information(detail));
            message.success("Profile was updated successfully", alertDuration);
          } else {
            // message.(res.warning, alertDuration));
            message.error(res.warning, alertDuration);
          }
        } else {
          const error = response.data.errors.map((err) => err.message);
          message.error(error, alertDuration);
        }
        dispatch(messages());
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages());
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
          message.success("Image was updated successfully", alertDuration);
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages());
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages());
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
            message.success(
              `${req.label} has been added successfully`,
              alertDuration
            );
          } else {
            dispatch(editSocialLink(req));
            message.success(
              `${req.label} has been updated successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages());
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages());
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
            message.success(`Social Contact has been removed`, alertDuration);
          } else {
            message.warning(res.warning, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages());
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages());
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
            message.success(
              `${edu.institution} has been added successfully`,
              alertDuration
            );
          } else {
            dispatch(edit_education(edu));
            message.success(
              `${edu.institution} has been updated successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(`Education has been removed`, alertDuration);
          } else {
            message.warning(res.message, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(
              `${exp.organization} has been added successfully`,
              alertDuration
            );
          } else {
            dispatch(edit_experience(exp));
            message.success(
              `${exp.organization} has been updated successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(`Experience has been removed`, alertDuration);
          } else {
            message.warning(res.message, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(
              `${request.title} has been added successfully`,
              alertDuration
            );
          } else {
            dispatch(edit_project(request));
            message.success(
              `${request.title} has been updated successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(`Project has been removed`, alertDuration);
          } else {
            message.warning(res.message, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(
              `${request.title} has been updated successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(`Skill has been removed`, alertDuration);
          } else {
            message.warning(res.message, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(
              `${title} has been added successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(`Sub-skill has been removed`, alertDuration);
          } else {
            message.warning(res.warning, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(
              `${request.course} has been updated successfully`,
              alertDuration
            );
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
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
            message.success(`Accomplishment has been removed`, alertDuration);
          } else {
            message.warning(res.message, alertDuration);
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
        dispatch(messages())
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
        dispatch(messages())
      });
  };
};

const fetch_template = (template) => {
  return {
    type: actionType.FETCH_TEMPLATE,
    payload: template,
  };
};

export const fetchTemplates = () => {
  return (dispatch) => {
    instanceAxios({
      data: query.templateList(),
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.template;
          dispatch(fetch_template(res));
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
      });
  };
}

const set_template = (id) => {
  return {
    type: actionType.SET_TEMPLATE,
    id
  };
};

export const setTemplate = (id) => {
  return (dispatch) => {
    instanceAxios({
      data: query.setTemplate(id),
      headers: {
        Authorization: headerToken(),
      }
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.template;
          if(res.ok){
            dispatch(set_template(id));
          } else {
            message.error(res.warning, alertDuration)
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
      });
  };
}


const allow_download = (state) => {
  return {
    type: actionType.ALLOW_DOWNLOAD,
    state
  };
};

export const allowDownload = (state) => {
  return (dispatch) => {
    instanceAxios({
      data: query.download(state),
      headers: {
        Authorization: headerToken(),
      }
    })
      .then((response) => {
        if (!response.data.errors) {
          let res = response.data.data.allowDownload;
          if(res.ok){
            dispatch(allow_download(state));
          }
        } else {
          response.data.errors.map((err) =>
            message.error(err.message, alertDuration)
          );
        }
      })
      .catch((err) => {
        message.error(err.message, alertDuration);
      });
  };
}