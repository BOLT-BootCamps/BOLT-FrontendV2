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
        pkiEventID,
        sEventName,
        sDescription,
        dtStartDate,
        dtEndDate,
        sImageUrl,
        sZoomUrl,
        fkiBootcampID,
        sBootcampName
      }
    }
  `
  return query
}

export const getBootcampNames = () => {
  const query = `
    query {
      bootcamps {
        pkiBootcampID,
        sBootcampName,
      }
    }
  `
  return query
}

export const addEvent = (event) => {
  const mutation = `
    mutation {
      addEvent (event: {

          sEventName: '${event.sEventName}',
          sDescription: '${event.sDescription}',
          dtStartDate: '${event.dtStartDate}',
          dtEndDate: '${event.dtEndDate}',
          sImageUrl: '${event.sImageUrl}',
          sZoomUrl: '${event.sZoomUrl},
          fkiBootcampID: ${event.fkiBootcampID}
        }
      )
    }
  `
  return mutation
}
