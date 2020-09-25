import * as actionType from "../actions/actionType";

const initialState = {
  personal_info: {
    username: "John01",
    first_name: "John",
    last_name: "Doe",
    middle_name: "Orion",
    email: "John.Doe@mail.com",
    gender: "Male",
    language: "English, French",
    state_of_residence: "Lagos",
    nationality: "Nigeria",
    date_of_birth: "12th, December",
    profession: "Accountant",
    profile_pix:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/440px-Lion_waiting_in_Namibia.jpg",
    bio:
      "A graduate of Accounting, Ladoke Akintola University of Technology, A passionate writter and a loving Dog owner",
  },
  skills: ["ICAN, BSc, MBA"],
  education: [
    {
      education_type: "Tertiary",
      institution: "Lautech",
      start_year: 2010,
      end_year: 2014,
      degree: "BSc",
      course: "Accounting",
    },
    {
      education_type: "Tertiary",
      institution: "Manchester University",
      start_year: 2015,
      end_year: 2017,
      degree: "MBA",
      course: "Accounting",
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
    }
  ],
  project: [{
      title: "Fraud detection using transaction pattern",
      description: "Fraud detection using transaction pattern and previous account records."
  },{
    title: "Fraud detection using transaction pattern",
    description: "Fraud detection using transaction pattern and previous account records."
},
{
    title: "Fraud detection using transaction pattern",
    description: "Fraud detection using transaction pattern and previous account records."
},{
    title: "Fraud detection using transaction pattern",
    description: "Fraud detection using transaction pattern and previous account records."
},{
  title: "Fraud detection using transaction pattern",
  description: "Fraud detection using transaction pattern and previous account records."
},
{
  title: "Fraud detection using transaction pattern",
  description: "Fraud detection using transaction pattern and previous account records."
},{
    title: "Fraud detection using transaction pattern",
    description: "Fraud detection using transaction pattern and previous account records."
},{
  title: "Fraud detection using transaction pattern",
  description: "Fraud detection using transaction pattern and previous account records."
},
{
  title: "Fraud detection using transaction pattern",
  description: "Fraud detection using transaction pattern and previous account records."
},
]
};


const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.PERSONAL_INFORMATION:
            return {
                ...state
            }
        case actionType.EDUCATION:
            return {
                ...state
            }
            case actionType.EXPERIENCE:
        return {
            ...state
        }
        case actionType.PROFESSIONAL_SUMMARY:
        return {
            ...state
        }
        case actionType.PROJECTS:
        return {
            ...state
        }
        case actionType.SKILL:
        return {
            ...state
        }
        case actionType.SOCIAL_LINK:
        return {
            ...state
        }
        default: return state
    }
}

export default reducer