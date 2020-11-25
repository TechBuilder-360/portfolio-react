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
      personalInfo(input: {email: "abc@mail.com", firstName: "Toluwalope", lastName: "Adegunwa", profession: "Software development", bio: "Dedicated software developer", gender: "Male"}) {
        errors {
          messages
          field
        }
        ok
      }
    }`
  })
}