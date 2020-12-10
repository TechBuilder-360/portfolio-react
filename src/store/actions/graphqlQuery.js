export const googleSignin = token => {
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
}


export const uploadAvatar = file => {
  return JSON.stringify({
    query: `mutation avatar {
      upload(file: ${file}) {
        success
      }
    }`
  })
}


export const edit_personalinfo = detail => {
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
          dateOfBirth: "${detail.date_of_birth.toISOString().split('T')[0]}",
          phone: "${detail.phone}"
        ) {
        ok
      }
    }`
});
}


export const education = detail => {
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
    `
  })
}

export const experience = detail => {
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
    `
  })
}

export const delete_experience = id => {
  return JSON.stringify({
    query: `mutation removeExperience{
          removeExperience(id: ${id}){
            ok
            message
          }
        }
    `
  })
}

export const delete_education = id => {
  return JSON.stringify({
    query: `mutation removeEducation{
      removeEducation(id: ${id}){
        ok
        message
      }
    }
    `
  })
}