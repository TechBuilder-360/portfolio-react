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
      avatar(avatar: "${file}") {
        ok
        warning
      }
    }`
  })
}