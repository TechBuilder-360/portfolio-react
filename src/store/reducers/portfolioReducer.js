import * as actionType from "../actions/actionType"

const initialState = {
  personalInfo: {
    username: "John01",
    firstName: "John",
    lastName: "Doe",
    middleName: "Orion",
    email: "John.Doe@mail.com",
    gender: "Male",
    languages: "English, French", // MAX length 100
    location: "Lagos,Nigeria",
    dateOfBirth: "12/12/2019", // default null
    profession: "Accountant",
    profilePix: "",
    phone: "+2347458747777",
    // "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/440px-Lion_waiting_in_Namibia.jpg",
    bio:
      "A graduate of Accounting, Ladoke Akintola University of Technology, A passionate writter and a loving Dog owner",
  },
  subskill: [
    { id: 1, title: "HTML", skill: 1 },
    { id: 2, title: "CSS", skill: 1 },
    { id: 3, title: "Javascript", skill: 1 },
    { id: 4, title: "SCSS", skill: 1 },
    { id: 5, title: "Django", skill: 1 },
    { id: 6, title: "Spring Boot", skill: 1 },
    { id: 7, title: "ICAN", skill: 2 },
    {
      id: 8,
      title: "COMPTIA N+",
      skill: 3,
    },
    {
      id: 9,
      title: "CCNA",
      skill: 3,
    },
    {
      id: 10,
      title: "CCNP",
      skill: 3,
    },
    {
      id: 11,
      title: "SCRUM",
      skill: 4,
    },
    {
      id: 12,
      title: "AGILE",
      skill: 4,
    },
    {
      id: 13,
      title: "SPSS",
      skill: 4,
    },
    {
      id: 14,
      title: "Apache Spark",
      skill: 5,
    },
    {
      id: 15,
      title: "Apache Kafka",
      skill: 5,
    },
    {
      id: 16,
      title: "Postgres",
      skill: 6,
    },
    {
      id: 17,
      title: "Cassandra",
      skill: 6,
    },
    {
      id: 18,
      title: "MYSQL",
      skill: 6,
    },
    {
      id: 19,
      title: "MSSQL Server",
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
      startYear: "Aug. 2006",
      endYear: "Dec. 2011",
      degree: "BSc",
      course: "Accounting",
    },
    {
      id: 2,
      institution: "Manchester University",
      startYear: "Nov. 2012",
      endYear: "Jan. 2017",
      degree: "MBA",
      course: "Accounting",
    },
    {
      id: 3,
      institution: "Doregos College",
      startYear: "Oct. 2000",
      endYear: "Oct. 2006",
      degree: "SSCE",
    },
  ],
  experience: [
    {
      id: 1,
      organization: "Consolidate Insurance",
      description: "Worked as an account manager",
      position: "Accounting managment",
      startYear: "Jun. 2016",
      endYear: "Jun. 2018",
    },
    {
      id: 2,
      organization: "Access Bank",
      description: "Worked as an account manager",
      position: "Accounting managment",
      startYear: "Oct. 2018",
      endYear: "Dec. 2019",
    },
    
  ],
  project: [
    {
      id: 2,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 2,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 3,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 4,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 5,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 6,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 7,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 8,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
    },
    {
      id: 9,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      projectUrl: "/",
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
    {
      id: 3,
      label: "Instagram",
      url: "https://instagram.com",
    }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PORTFOLIO:
      return {
        ...state,
        skills: action.payload.skills,
        personalInfo: action.payload.personalInfo,
        subskill: action.payload.subskill.map(sub=> {
          sub.skill = sub.skill.id
          return sub
        }),
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
        personalInfo: { ...state.personalInfo, profile_pix: action.imageURL },
      };
    case actionType.AVATAR_UPLOAD_FAILED:
      return {
        ...state,
      };
    case actionType.MESSAGES:
      return {
        ...state,
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
