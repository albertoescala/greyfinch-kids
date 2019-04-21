import { gql } from 'apollo-boost'

const AllUsers = gql`
 {
   allUsers(orderBy: createdAt_DESC) {
     id
     name
     age
   }
 }
`

export default AllUsers