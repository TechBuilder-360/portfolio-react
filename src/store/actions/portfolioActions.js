import * as actionType from './actionType'

export const Personal_Information = () => {
    return {
        type: actionType.PERSONAL_INFORMATION
    }
}

export const Professional_Summary = () => {
    return {
        type: actionType.PROFESSIONAL_SUMMARY
    }
}

export const Experience = () => {
    return {
        type: actionType.EXPERIENCE
    }
}

export const Education = () => {
    return {
        type: actionType.EDUCATION
    }
}

export const Projects = () => {
    return {
        type: actionType.PROJECTS
    }
}

export const Skill = () => {
    return {
        type: actionType.SKILL
    }
}

export const Social_Link = () => {
    return {
        type: actionType.SOCIAL_LINK
    }
}

export const add_education=content=>{

    return{
        type:actionType.ADD_EDUCATION,
        payload:{
            content
        }

    }
}