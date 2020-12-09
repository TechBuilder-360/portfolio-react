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
    phone: '+2347458747777',
    // "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/440px-Lion_waiting_in_Namibia.jpg",
    bio:
      "A graduate of Accounting, Ladoke Akintola University of Technology, A passionate writter and a loving Dog owner",
    resume: ""
  },
  skills: [{
    id: 1,
    title: "Web development",
    subskill: [
    {id: 1,
      name: "HTML"
    },
    {id: 2,
      name: "CSS"
    },
    {id: 3,
      name: "Javascript"
    },
    {id: 4,
      name: "SCSS"
    },
    {id: 5,
      name: "Django"
    },
    {id: 6,
      name: "Spring Boot"
    },
    ]
  },
  {
    id: 2,
    title: "Accounting",
    subskill: [
      {
        id:1,
        name: "ICAN"
      }
    ]
  },
  {
    id:3,
    title: "Networking",
    subskill: [
      {
        id:1,
        name:  "COMPTIA N+"
      },
      {
        id:2,
        name:  "CCNA"
      },
      {
        id:3,
        name:  "CCNP"
      }
    ]
  },
  {
    id:4,
    title: "Project Management",
    subskill: [
      {
        id:1,
        name: "SCRUM"
      },
      {
        id:2,
        name: "AGILE"
      },
      {
        id:1,
        name: "SPSS"
      },
    ]
  },
  {
    id:5,
    title: "Big Data",
    subskill: [
      {
        id:1,
        name: "Apache Spark"
      },
      {
        id:2,
        name: "Apache Kafka"
      },
    ]
  },
  {
    id:6,
    title: "Database Management",
    subskill: [
      {
        id:1,
        name: "Postgres"
      },
      {
        id:2,
        name: "Cassandra"
      },
      {
        id:3,
        name: "MYSQL"
      },
      {
        id:4,
        name: "MSSQL Server"
      },
    ]
  }],
  education: [
    {
      id:1,
      education_type: "Tertiary",
      institution: "Lautech",
      start_year: 2006,
      end_year: 2011,
      degree: "BSc",
      course: "Accounting",
    },
    {
      id:2,
      education_type: "Tertiary",
      institution: "Manchester University",
      start_year: 2012,
      end_year: 2017,
      degree: "MBA",
      course: "Accounting",
      class_of_degree: 'First Class'
    },
    {
      id:3,
      education_type: "College",
      institution: "Doregos College",
      start_year: 2000,
      end_year: 2006,
      degree: "SSCE"
    },
  ],
  experience: [
    {
      organization: "Consolidate Insurance",
      description: "Worked as an account manager",
      position: "Accounting managment",
      start_year: 2016,
      end_year: 2018,
    },
    {
      organization: "Access Bank",
      description: "Worked as an account manager",
      position: "Accounting managment",
      start_year: 2018,
      end_year: null,
    },
  ],
  project: [
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
    },
    {
      title: "Fraud detection using transaction pattern",
      description:
        "Fraud detection using transaction pattern and previous account records.",
      url: "/"
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
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PERSONAL_INFORMATION:
      return {
        ...state,
        personal_info: {...state.personal_info, ...action.detail}
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
      };
    case actionType.AVATAR_UPLOAD:
      return {
        ...state,
        personal_info: {...state.personal_info, profile_pix: action.imageURL}
    }
    case actionType.AVATAR_UPLOAD_FAILED:
      return {
        ...state
    }
    case actionType.MESSAGES:
      return {
        ...state
    }
    case actionType.ADD_EDUCATION:
      return{
        ...state,
        education: [...state.education, action.payload]
      }
    case actionType.DELETE_EDUCATION:
        return{
          ...state,
          education: [...state.education.filter( education => education.id !== action.payload)]
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
        // case actionType.DELETE_SUCCESS:
          
        //   return {...state,
        //   education:[state.education.filter(education=>education.id !==action.payload)]
        //   }
    default:
    return state;
  }
};

export default reducer;
