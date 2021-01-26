import * as actionType from "../actions/actionType";

const initialState = {
  personalInfo: null,
  skills: [],
  subskill: [],
  education: [],
  experience: [],
  project: [],
  social: [],
  accomplishment: [],
  message: {
    messages: [],
    alert: "",
  },
  redirect: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DOWNLOAD_RESUME:
      return {
        ...state,
      };
    case actionType.MESSAGES:
      return {
        ...state,
        message: action.detail,
      };
    case actionType.CLEAR_MESSAGES:
      return {
        ...state,
        message: {
          messages: [],
          alert: "",
        },
      };
    case actionType.REDIRECT:
      return {
        ...state,
        redirect: true,
      };
    case actionType.CLEAR_REDIRECT:
      return {
        ...state,
        redirect: false,
      };
    case actionType.FETCH_PORTFOLIO:
      return {
        ...state,
        skills: action.payload.skills,
        personalInfo: action.payload.personalInfo,
        subskill: action.payload.subskill.map((sub) => {
          sub.skill = sub.skill.id;
          return sub;
        }),
        accomplishment: action.payload.accomplishment,
        education: action.payload.education,
        experience: action.payload.experience,
        project: action.payload.project,
        social: action.payload.social,
      };
    case actionType.PERSONAL_INFORMATION:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.detail },
      };
    case actionType.SKILL:
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };
    case actionType.AVATAR_UPLOAD:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, profilePix: action.imageURL },
      };
    case actionType.ADD_SOCIAL_LINK:
      return {
        ...state,
        social: [...state.social, action.payload],
      };
    case actionType.EDIT_SOCIAL_LINK:
      let newSocial = state.social.map((socialLink) => {
        if (socialLink.id === action.payload.id) {
          socialLink.label = action.payload.label;
          socialLink.url = action.payload.url;
        }
        return socialLink;
      });
      return {
        ...state,
        social: newSocial,
      };
    case actionType.DELETE_SOCIAL_LINK:
      return {
        ...state,
        social: [...state.social.filter((link) => link.id !== action.id)],
      };
    case actionType.ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    case actionType.DELETE_EDUCATION:
      return {
        ...state,
        education: [
          ...state.education.filter(
            (education) => education.id !== action.payload
          ),
        ],
      };
    case actionType.EDIT_EDUCATION:
      const oldEdu = [...state.education];
      const education = oldEdu.map((edu) => {
        if (edu.id === action.payload.id) {
          edu = action.payload;
        }
        return edu;
      });
      return {
        ...state,
        education,
      };

    case actionType.ADD_EXPERIENCE:
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case actionType.DELETE_EXPERIENCE:
      return {
        ...state,
        experience: [
          ...state.experience.filter(
            (experience) => experience.id !== action.payload
          ),
        ],
      };
    case actionType.EDIT_EXPERIENCE:
      const oldExp = [...state.experience];
      const experience = oldExp.map((exp) => {
        if (exp.id === action.payload.id) {
          exp = action.payload;
        }
        return exp;
      });
      return {
        ...state,
        experience,
      };

    case actionType.ADD_PORJECT:
      return {
        ...state,
        project: [...state.project, action.payload],
      };
    case actionType.DELETE_PROJECT:
      return {
        ...state,
        project: [
          ...state.project.filter((project) => project.id !== action.payload),
        ],
      };
    case actionType.EDIT_PROJECT:
      const oldProject = [...state.project];
      const project = oldProject.map((proj) => {
        if (proj.id === action.payload.id) {
          proj = action.payload;
        }
        return proj;
      });
      return {
        ...state,
        project,
      };

      case actionType.ADD_ACCOMPLISHMENT:
        return {
          ...state,
          accomplishment: [...state.accomplishment, action.payload],
        };
      case actionType.DELETE_ACCOMPLISHMENT:
        return {
          ...state,
          accomplishment: [
            ...state.accomplishment.filter((acc) => acc.id !== action.payload),
          ],
        };
      case actionType.EDIT_ACCOMPLISHMENT:
        const oldACC = [...state.accomplishment];
        const accomplishment = oldACC.map((acc) => {
          if (acc.id === action.payload.id) {
            acc = action.payload;
          }
          return acc;
        });
        return {
          ...state,
          accomplishment,
        };

    case actionType.EDIT_SKILL:
      const oldSkill = [...state.skills];
      const skills = oldSkill.map((skill) => {
        if (skill.id === action.payload.id) {
          skill = action.payload;
        }
        return skill;
      });
      return {
        ...state,
        skills,
      };

    case actionType.DELETE_SKILL:
      return {
        ...state,
        skills: [
          ...state.skills.filter((skill) => skill.id !== action.payload),
        ],
      };

    case actionType.SUBSKILL:
      return {
        ...state,
        subskill: [...state.subskill, action.payload],
      };

    case actionType.DELETE_SUBSKILL:
      return {
        ...state,
        subskill: [
          ...state.subskill.filter((skill) => skill.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
