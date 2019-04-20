import { gql } from 'apollo-boost'

const CreateUser = gql`
  mutation CreateUser($name: String, $age: Int, $score: Int!) {
    createUser(name: $name, age: $age, score: $score) {
      id
      name
      age
      score
    }
  }
`

export default CreateUser;