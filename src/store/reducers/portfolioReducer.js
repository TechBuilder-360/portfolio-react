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
  skills: [
    {
      id: 1,
      title: "Web development",
      subskill: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Javascript" },
        { id: 4, name: "SCSS" },
        { id: 5, name: "Django" },
        { id: 6, name: "Spring Boot" },
      ],
    },
    {
      id: 2,
      title: "Accounting",
      subskill: [
        {
          id: 1,
          name: "ICAN",
        },
      ],
    },
    {
      id: 3,
      title: "Networking",
      subskill: [
        {
          id: 1,
          name: "COMPTIA N+",
        },
        {
          id: 2,
          name: "CCNA",
        },
        {
          id: 3,
          name: "CCNP",
        },
      ],
    },
    {
      id: 4,
      title: "Project Management",
      subskill: [
        {
          id: 1,
          name: "SCRUM",
        },
        {
          id: 2,
          name: "AGILE",
        },
        {
          id: 1,
          name: "SPSS",
        },
      ],
    },
    {
      id: 5,
      title: "Big Data",
      subskill: [
        {
          id: 1,
          name: "Apache Spark",
        },
        {
          id: 2,
          name: "Apache Kafka",
        },
      ],
    },
    {
      id: 6,
      title: "Database Management",
      subskill: [
        {
          id: 1,
          name: "Postgres",
        },
        {
          id: 2,
          name: "Cassandra",
        },
        {
          id: 3,
          name: "MYSQL",
        },
        {
          id: 4,
          name: "MSSQL Server",
        },
      ],
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
      label: "facebook",
      url: "https://facebook.com",
    },
    {
      id: 2,
      label: "twitter",
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
    case actionType.SOCIAL_LINK:
      return {
        ...state,
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
        ...state,
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
      const newData = [...state.education];
      newData[action.payload.index] = action.payload.content;
      return {
        ...state,
        education: newData,
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
      const newDataExp = [...state.experience];
      newDataExp[action.payload.index] = action.payload.content;
      return {
        ...state,
        experience: newDataExp,
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
      const newDataPro = [...state.project];
      newDataPro[action.content.id] = action.content;
      return {
        ...state,
        project: newDataPro,
      };

    case actionType.EDIT_SKILL:
      const newDataPro1 = [...state.skills];
      newDataPro1[action.payload.index].title = action.payload.content.title;

      return {
        ...state,
        skills: newDataPro1,
      };

    case actionType.DELETE_SKILL:
      return {
        ...state,
        skills: [
          ...state.skills.filter((skills) => skills.id !== action.payload),
        ],
      };

    case actionType.SUBSKILL:
      const skills = [...state.skills];
      let i = skills.findIndex((skill) => skill.id == action.payload.index);
      skills[i].subskill.push(action.payload.req);
      return {
        ...state,
        skills: skills,
      };

    case actionType.DELETE_SUBSKILL:
      const skills = [...state.skills];
      let i = skills.findIndex((skill) => skill.id == action.payload.index);
      skills[i].subskill.push(action.payload.req);
      return {
        ...state,
        skills: skills,
      };
    default:
      return state;
  }
};

export default reducer;
