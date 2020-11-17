import axios from '../../axios-orders'
import * as actionType from './actionType'
import * as query from './graphqlQuery'

export const Personal_Information = () => {
    return {
        type: actionType.PERSONAL_INFORMATION
    }
}

export const setAvatar = () => {
    return {
        type: actionType.AVATAR_UPLOAD
    }
}

export const AvatarUploadFailed = () => {
    return {
        type: actionType.AVATAR_UPLOAD_FAILED
    }
}

export const avatar = (photo) =>{
    return dispatch => {
        let formData = new FormData();

        formData.append("avatar", photo);
        axios({data: formData}).then((response) => {
            console.log(response);
            // dispatch(setAvatar(response.data));
        }).catch(error => {
            console.error(error);
            // dispatch(AvatarUploadFailed())
        });
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