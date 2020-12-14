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
          firstName: "${detail.first_name}",
          lastName: "${detail.last_name}",
          middleName: "${detail.middle_name}",
          profession: "${detail.profession}",
          bio: "${detail.bio}",
          gender: "${detail.gender}",
          languages: "${detail.languages}",
          location: "${detail.location}",
          dateOfBirth: "${detail.date_of_birth.toISOString().split("T")[0]}",
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
        startYear: "${detail.start_year}", 
        endYear: "${detail.end_year}", 
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
        startYear: "${detail.start_year}",
        endYear: "${detail.end_year}",
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
