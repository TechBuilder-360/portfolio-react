import * as actionType from "./actionType";

export const Personal_Information = () => {
  return {
    type: actionType.PERSONAL_INFORMATION,
  };
};

export const Professional_Summary = () => {
  return {
    type: actionType.PROFESSIONAL_SUMMARY,
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

export const add_education = (content) => {
  content.id = Math.random()*100
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

export const edit_education = (index,content) => {
  return {
    type: actionType.EDIT_EDUCATION,
    payload: {
      'index':index,
      'content':content
    }
  };
};

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

export const edit_experience = (index,content) => {
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


