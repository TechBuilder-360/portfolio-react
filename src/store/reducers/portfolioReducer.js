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
    state_of_residence: "Lagos",
    nationality: "Nigeria",
    date_of_birth: "12th, December",
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
      start_year: 2006,
      end_year: 2011,
      degree: "BSc",
      course: "Accounting",
    },
    {
      id: 2,
      institution: "Manchester University",
      start_year: 2012,
      end_year: 2017,
      degree: "MBA",
      course: "Accounting",
    },
    {
      id: 3,
      institution: "Doregos College",
      start_year: 2000,
      end_year: 2006,
      degree: "SSCE",
    },
  ],
  experience: [
    {
      id:1,
      organization: "Consolidate Insurance",
      description: "Worked as an account manager",
      position: "Accounting managment",
      start_year: 2016,
      end_year: 2018,
    },
    {
      id:2,
      organization: "Access Bank",
      description: "Worked as an account manager",
      position: "Accounting managment",
      start_year: 2018,
      end_year: null,
    },
  ],
  project: [
    {id:2,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {id:2,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {id:3,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {id:4,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {id:5,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    {id:6,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    { id:7,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    { id:8,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
    { id:9,
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/",
    },
  ],
  social: [
    {
      label: "facebook",
      url: "https://facebook.com",
    },
    {
      label: "twitter",
      url: "https://twitter.com",
    },
  ],

  messages: [
    // types: success, info, warning, danger
    {
      type: "info",
      message: "Flash message",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PERSONAL_INFORMATION:
      return {
        ...state,
      };
    case actionType.EDUCATION:
      return {
        ...state,
      };
    case actionType.EXPERIENCE:
      return {
        ...state,
      };
    case actionType.PROFESSIONAL_SUMMARY:
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
      };
    case actionType.SOCIAL_LINK:
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
        const newData=[...state.education]
        newData[action.payload.index]=action.payload.content
      return {
        ...state,
        education:newData
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
          const newDataExp=[...state.experience]
          newDataExp[action.payload.index]=action.payload.content
        return {
          ...state,
          experience:newDataExp
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
            ...state.project.filter(
              (project) => project.id !== action.payload
            ),
          ],
        };
        case actionType.EDIT_PROJECT:
          const newDataPro=[...state.project]
          newDataPro[action.payload.index]=action.payload.content
        return {
          ...state,
          project:newDataPro
        };
    default:
      return state;
  }
};

export default reducer;
