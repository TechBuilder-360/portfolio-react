export const googleSignin = (token) => {
  return JSON.stringify({
    query: `mutation googleSignin {
        socialAuth(accessToken: "${token}", provider: "google-oauth2") {
          social {
            user {
              username
            }
          }
          token
        }
      }`,
  });
};

export const registration = user => {
  return JSON.stringify({
    query: `mutation registration {
      register(
        email: "${user.email}", 
        password: "${user.password}", 
        firstName: "${user.firstName}", 
        lastName: "${user.lastName}"){
        ok
        error
      }
    }`
  })
}

export const login = user => {
  return JSON.stringify({
    query: `mutation TokenAuth {
      tokenAuth(
        email: "${user.email.toLowerCase()}", 
        password: "${user.password}"){
        token
        success
        user{
          username
        }
      }
    }`
  })
}

export const uploadAvatar = (file) => {
  return JSON.stringify({
    query: `mutation avatar {
      upload(file: ${file}) {
        success
      }
    }`,
  });
};

export const edit_personalinfo = (detail) => {
  return JSON.stringify({
    query: `mutation personal_info_change {
      personalInfo(
          email: "${detail.email}",
          firstName: "${detail.firstName}",
          lastName: "${detail.lastName}",
          middleName: "${detail.middleName}",
          profession: "${detail.profession}",
          bio: "${detail.bio}",
          gender: "${detail.gender}",
          languages: "${detail.languages}",
          location: "${detail.location}",
          dateOfBirth: "${detail.dateOfBirth.toISOString().split("T")[0]}",
          phone: "${detail.phone}"
        ) {
        ok
      }
    }`,
  });
};

export const education = (detail) => {
  return JSON.stringify({
    query: `mutation education {
      education(
        id: "${detail.id}",
        course: "${detail.course}", 
        degree: "${detail.degree}", 
        startYear: "${detail.startYear}", 
        endYear: "${detail.endYear}", 
        institution: "${detail.institution}"){
        education{
          id
        }
        created
      }
    }
    `,
  });
};

export const experience = (detail) => {
  return JSON.stringify({
    query: `mutation experience{
      experience(
        id: "${detail.id}",
        position: "${detail.position}",
        description: "${detail.description}",
        startYear: "${detail.startYear}",
        endYear: "${detail.endYear}",
        organization: "${detail.organization}"
      ){
        experience{
          id
        }
        created
      }
    }
    `,
  });
};

export const delete_experience = (id) => {
  return JSON.stringify({
    query: `mutation removeExperience{
          removeExperience(id: ${id}){
            ok
            message
          }
        }
    `,
  });
};

export const delete_education = (id) => {
  return JSON.stringify({
    query: `mutation removeEducation{
      removeEducation(id: ${id}){
        ok
        message
      }
    }
    `,
  });
};

export const mutate_skill = (req) => {
  return JSON.stringify({
    query: `mutation Skill {
      skill(
        title: "${req.title}", 
        id: "${req.id}") {
          created
          skill {
            id
          }
        }
      }
    `,
  });
};

export const delete_skill = (id) => {
  return JSON.stringify({
    query: `mutation removeSkill {
      removeSkill(skillId: "${id}") {
        ok
        warning
      }
    }
    `,
  });
};

export const mutate_project = (req) => {
  return JSON.stringify({
    query: `mutation project{
      project(
        description: "${req.description}",
        projectUrl: "${req.url}",
        title: "${req.title}",
        id: "${req.id}"){
        created
        project{
          id
        }
      }
    }
    `,
  });
};

export const remove_project = (id) => {
  return JSON.stringify({
    query: `mutation removeProject{
      removeProject(projectId: "${id}"){
        ok
        warning
      }
    }
    `,
  });
};

export const subSkill = (skill, title) => {
  return JSON.stringify({
    query: `mutation subSkill{
      subSkill(
        skill: ${skill},
        title: "${title}"
      ){
        warning
        created
        subSkill{
          id
        }
      }
    }
    `,
  });
};

export const remove_subskill = (id) => {
  return JSON.stringify({
    query: `mutation removeSubSkill {
      removeSubskill(id: ${id}){
        ok
        warning
      }
    }
    `,
  });
};

export const social = (social) => {
  return JSON.stringify({
    query: `mutation social{
      social(
        id: "${social.id}"
        label: "${social.label}"
        url: "${social.url}"
        ){
          created
          social{
            id
          }
        }
      }
      `,
  });
};

export const remove_social = (id) => {
  return JSON.stringify({
    query: `mutation removeSocial{
        removeSocial(id: ${id}){
          ok
          warning
        }
      }
      `,
  });
};


export const portfolio = (username) => {
  return JSON.stringify({
    query: `query fetchPortfolio($username: String){
      skills(username: $username){
        id
        title
      }
      project(username: $username){
        id
        projectUrl
        title
        description
      }
      education(username: $username){
        id
        institution
        startYear
        endYear
        degree
        course
      }
      subskill(username: $username){
        id
        skill{
          id
        }
        title
      }
      experience(username: $username){
        id
        organization
        position
        description
        startYear
        endYear
      }
      education(username: $username){
        id
        institution
        startYear
        endYear
        degree
        course
      }
      social(username: $username){
        id
        label
        url
      }
      accomplishment(username: $username){
        certificate
        course
        id
        issuer
      }
      personalInfo(username: $username){
        username
        middleName
        firstName
        lastName
        dateOfBirth
        email
        gender
        phone
        bio
        languages
        location
        profession
        profilePix
      }
    }
    `,
    variables: {"username": `${username}`}
  })
}

export const mutate_accomplishment = (detail) => {
  return JSON.stringify({
    query: `mutation accomplishment{
      accomplishment(
        certificate: "${detail.certificate}"
        course: "${detail.course}"
        description: "${detail.description}"
        issuer: "${detail.issuer}"
        id: "${detail.id}"
      ){
        id
        created
      }
    }
    `
  })
}

export const remove_accomplishment = (id) => {
  return JSON.stringify({
    query: `mutation remove_accomplishment {
      removeAccomplishment(id: ${id}){
        warning
        ok
      }
    }`
  })
}