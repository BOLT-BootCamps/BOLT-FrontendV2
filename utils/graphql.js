import { gql } from 'nuxt-graphql-request'

export const getProfile = (email) => {
  const query = gql`
  query {
    user(email: "${email}") {
      firstname
      lastname
      email
      username
    }
  }`
  return query
}

export const getEvents = () => {
  const query = `
    query {
      events {
        id,
        name,
        description,
        start_date,
        end_date,
        image_url,
        zoom_url,
        bootcamp
      }
    }
  `
  return query
}
