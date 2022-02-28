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

export const getEvent = () => {
  const query = `
    query GETEVENT($id: Int!) {
      event(id: $id) {
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
        sDefaultZoomUrl
      }
    }
  `
  return query
}

export const addEvent = () => {
  const mutation = `
    mutation ADDEVENT(
      $sEventName: String!, 
      $sDescription: String!, 
      $dtStartDate: String!, 
      $dtEndDate: String!, 
      $sImageUrl: String!,
      $sZoomUrl: String!,
      $fkiBootcampID: Int!,
      ) {
      addEvent (event: {

          sEventName: $sEventName,
          sDescription: $sDescription,
          dtStartDate: $dtStartDate,
          dtEndDate: $dtEndDate,
          sImageUrl: $sImageUrl,
          sZoomUrl: $sZoomUrl,
          fkiBootcampID: $fkiBootcampID
        }
      )
    }
  `
  return mutation
}

export const editEvent = () => {
  const mutation = `
    mutation EDITEVENT(
      $sEventName: String!, 
      $sDescription: String!, 
      $dtStartDate: String!, 
      $dtEndDate: String!, 
      $sImageUrl: String!,
      $sZoomUrl: String!,
      $fkiBootcampID: Int!,
      $pkiEventID: Int!,
      ) {
      updateEvent (event: {
          sEventName: $sEventName,
          sDescription: $sDescription,
          dtStartDate: $dtStartDate,
          dtEndDate: $dtEndDate,
          sImageUrl: $sImageUrl,
          sZoomUrl: $sZoomUrl,
          fkiBootcampID: $fkiBootcampID
        },
        id: $pkiEventID
      )
    }
  `
  return mutation
}

export const deleteEvent = () => {
  const mutation = `
  mutation DELETEEVENT(
    $id: Int!
  ) {
    deleteEvent (id: $id)
  }`
  return mutation
}

// Bootcamnps

export const getBootcamps = () => {
  const query = `
    query {
      bootcamps {
        pkiBootcampID,
        sBootcampName,
        sDescription,
        dtStartDate,
        dtEndDate,
        sImageUrl,
        sDefaultZoomUrl
      }
    }
  `
  return query
}

export const getBootcamp = () => {
  const query = `
    query GETBOOTCAMP($id: Int!) {
      bootcamp(id: $id) {
        pkiBootcampID,
        sBootcampName,
        sDescription,
        dtStartDate,
        dtEndDate,
        sImageUrl,
        sDefaultZoomUrl
      }
    }
  `
  return query
}

export const getBootcampZoomUrl = () => {
  const query = `
    query GETBOOTCAMPZOOMURL($id: Int!) {
      bootcamp(id: $id) {
        sDefaultZoomUrl
      }
    }
  `
  return query
}

export const addBootcamp = () => {
  const mutation = `
    mutation ADDBOOTCAMP(
      $sBootcampName: String!, 
      $sDescription: String!, 
      $dtStartDate: String!, 
      $dtEndDate: String!, 
      $sImageUrl: String!,
      $sDefaultZoomUrl: String!,
      ) {
      addBootcamp (bootcamp: {
          sBootcampName: $sBootcampName,
          sDescription: $sDescription,
          dtStartDate: $dtStartDate,
          dtEndDate: $dtEndDate,
          sImageUrl: $sImageUrl,
          sDefaultZoomUrl: $sDefaultZoomUrl
        }
      )
    }
  `
  return mutation
}

export const editBootcamp = () => {
  const mutation = `
    mutation EDITBOOTCAMP(
      $sBootcampName: String!, 
      $sDescription: String!, 
      $dtStartDate: String!, 
      $dtEndDate: String!, 
      $sImageUrl: String!,
      $sDefaultZoomUrl: String!,
      $pkiBootcampID: Int!,
      ) {
      updateBootcamp (bootcamp: {
          sBootcampName: $sBootcampName,
          sDescription: $sDescription,
          dtStartDate: $dtStartDate,
          dtEndDate: $dtEndDate,
          sImageUrl: $sImageUrl,
          sDefaultZoomUrl: $sDefaultZoomUrl,
        },
        id: $pkiBootcampID
      )
    }
  `
  return mutation
}
export const deleteBootcamp = () => {
  const mutation = `
  mutation DELETEBOOTCAMP(
    $id: Int!
  ) {
    deleteBootcamp (id: $id)
  }`
  return mutation
}
