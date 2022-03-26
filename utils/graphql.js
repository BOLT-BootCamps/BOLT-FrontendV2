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

export const getApplications = () => {
  const query = `
    query {
      applications {
        pkiApplicationID,
        sApplicationName,
        sDescription,
        dtStartDate,
        dtEndDate,
        sImageUrl,
        sFormUrl,
        iNumApplicants
      }
    }
  `
  return query
}

export const getApplication = () => {
  const query = `
    query GETAPPLICATION($id: Int!) {
      application(id: $id) {
        pkiApplicationID,
        sApplicationName,
        sDescription,
        dtStartDate,
        dtEndDate,
        sImageUrl,
        sFormUrl,
        iNumApplicants
      }
    }
  `
  return query
}

export const addApplication = () => {
  const mutation = `
    mutation ADDAPPLICATION(
      $sApplicationName: String!, 
      $sDescription: String!, 
      $dtStartDate: String!, 
      $dtEndDate: String!, 
      $sImageUrl: String!,
      $sFormUrl: String!,
      $fkiBootcampID: Int!,
      ) {
      addApplication (application: {
          sApplicationName: $sApplicationName,
          sDescription: $sDescription,
          dtStartDate: $dtStartDate,
          dtEndDate: $dtEndDate,
          sImageUrl: $sImageUrl,
          sFormUrl: $sFormUrl,
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

export const deleteApplication = () => {
  const mutation = `
  mutation DELETEAPPLICATION(
    $id: Int!
  ) {
    deleteApplication (id: $id)
  }`
  return mutation
}

export const editApplication = () => {
  const mutation = `
    mutation EDITAPPLICATION(
      $sApplicationName: String!, 
      $sDescription: String!, 
      $dtStartDate: String!, 
      $dtEndDate: String!, 
      $sImageUrl: String!,
      $sFormUrl: String!,
      $fkiBootcampID: Int!,
      $pkiApplicationID: Int!,
      ) {
      updateApplication (application: {
          sApplicationName: $sApplicationName,
          sDescription: $sDescription,
          dtStartDate: $dtStartDate,
          dtEndDate: $dtEndDate,
          sImageUrl: $sImageUrl,
          sFormUrl: $sFormUrl,
          fkiBootcampID: $fkiBootcampID
        },
        id: $pkiApplicationID
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
