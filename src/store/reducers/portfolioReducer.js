import { faSdCard } from "@fortawesome/free-solid-svg-icons";
import * as actionType from "../actions/actionType";

const initialState = {
  personal_info: {
    username: "John01",
    first_name: "John",
    last_name: "Doe",
    middle_name: "Orion",
    email: "John.Doe@mail.com",
    gender: "Male",
    languages: "English, French", // MAX length 100
    location: "Lagos, Nigeria",
    date_of_birth: "12/12/2019", // default null
    profession: "Accountant",
    profile_pix: "",
    phone: "+2347458747777",
    // "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/440px-Lion_waiting_in_Namibia.jpg",
    bio:
      "A graduate of Accounting, Ladoke Akintola University of Technology, A passionate writter and a loving Dog owner",
    resume: "",
  },
  subskill: [
    { id: 1, name: "HTML", skill: 1 },
    { id: 2, name: "CSS", skill: 1 },
    { id: 3, name: "Javascript", skill: 1 },
    { id: 4, name: "SCSS", skill: 1 },
    { id: 5, name: "Django", skill: 1 },
    { id: 6, name: "Spring Boot", skill: 1 },
    { id: 7, name: "ICAN", skill: 2 },
    {
      id: 8,
      name: "COMPTIA N+",
      skill: 3,
    },
    {
      id: 9,
      name: "CCNA",
      skill: 3,
    },
    {
      id: 10,
      name: "CCNP",
      skill: 3,
    },
    {
      id: 11,
      name: "SCRUM",
      skill: 4,
    },
    {
      id: 12,
      name: "AGILE",
      skill: 4,
    },
    {
      id: 13,
      name: "SPSS",
      skill: 4,
    },
    {
      id: 14,
      name: "Apache Spark",
      skill: 5,
    },
    {
      id: 15,
      name: "Apache Kafka",
      skill: 5,
    },
    {
      id: 16,
      name: "Postgres",
      skill: 6,
    },
    {
      id: 17,
      name: "Cassandra",
      skill: 6,
    },
    {
      id: 18,
      name: "MYSQL",
      skill: 6,
    },
    {
      id: 19,
      name: "MSSQL Server",
      skill: 6,
    },
  ],
  skills: [
    {
      id: 1,
      title: "Web development",
    },
    {
      id: 2,
      title: "Accounting",
    },
    {
      id: 3,
      title: "Networking",
    },
    {
      id: 4,
      title: "Project Management",
    },
    {
      id: 5,
      title: "Big Data",
    },
    {
      id: 6,
      title: "Database Management",
    },
  ],
  education: [
    {
      id: 1,
      institution: "Lautech",
      start_year: "Aug. 2006",
      end_year: "Dec. 2011",
      degree: "BSc",
      course: "Accounting",
    },
    {
      id: 2,
      institution: "Manchester University",
      start_year: "Nov. 2012",
      end_year: "Jan. 2017",
      degree: "MBA",
      course: "Accounting",
    },
    {
      id: 3,
      institution: "Doregos College",
      start_year: "Oct. 2000",
      end_year: "Oct. 2006",
      degree: "SSCE",
    },
  ],
  experience: [
    {
      id: 1,
      organization: "Consolidate Insurance",
      description: "Worked as an account manager",
      position: "Accounting managment",
      start_year: "Jun. 2016",
      end_year: "Jun. 2018",
    },
    {
      id: 2,
      organization: "Access Bank",
      description: "Worked as an account manager",
      position: "Accounting managment",
      start_year: "Oct. 2018",
      end_year: "Dec. 2019",
    },
  ],
  project: [
    {
      id: 2,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 2,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 3,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 4,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 5,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 6,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 7,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 8,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {
      id: 9,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
  ],
  social: [
    {
      id: 1,
      label: "Facebook",
      url: "https://facebook.com",
    },
    {
      id: 2,
      label: "Twitter",
      url: "https://twitter.com",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PERSONAL_INFORMATION:
      return {
        ...state,
        personal_info: { ...state.personal_info, ...action.detail },
      };
    case actionType.EDUCATION:
      return {
        ...state,
      };
    case actionType.EXPERIENCE:
      return {
        ...state,
      };
    case actionType.PROJECTS:
      return {
        ...state,
      };
    case actionType.SKILL:
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };
    case actionType.AVATAR_UPLOAD:
      return {
        ...state,
        personal_info: { ...state.personal_info, profile_pix: action.imageURL },
      };
    case actionType.AVATAR_UPLOAD_FAILED:
      return {
        ...state,
      };
    case actionType.MESSAGES:
      return {
        ...state
    }
    case actionType.ADD_SOCIAL_LINK:
    return{
      ...state,
      social: [...state.social, action.payload]
    }
    case actionType.EDIT_SOCIAL_LINK:
    let newSocial = state.social.map((socialLink) => {
      if (socialLink.id === action.payload.id){
        socialLink.label = action.payload.label;
        socialLink.url = action.payload.url;
      }
      return socialLink
    });
      return{
        ...state,
        social: newSocial
      }
    case actionType.DELETE_SOCIAL_LINK:
        return{
          ...state,
          social: [...state.social.filter( link => link.id !== action.id)]
        }
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
        if (edu.id == action.payload.id) {
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
        if (exp.id == action.payload.id) {
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
        if (proj.id == action.payload.id) {
          proj = action.payload;
        }
        return proj;
      });
      return {
        ...state,
        project
      };

    case actionType.EDIT_SKILL:
      const oldSkill = [...state.skills];
      const skills = oldSkill.map((skill) => {
        if (skill.id == action.payload.id) {
          skill = action.payload;
        }
        return skill;
      });
      return {
        ...state,
        skills
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
