export const googleSignin = token => {
    return JSON.stringify({
    query: `mutation googleSignin {
        socialAuth(accessToken: "${token}", provider: "google-oauth2") {
          social {
            uid
            user {
              id
              firstName
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
      personalInfo(input: {
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
        }) {
        errors {
          messages
          field
        }
        ok
      }
    }`
});
}