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