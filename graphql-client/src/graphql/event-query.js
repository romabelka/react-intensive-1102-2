import gql from 'graphql-tag'

export default gql`
    query EventQuery($id: ID!) {
        event(id: $id) {
            url
            people {
                id 
                firstName
            }
        }
    }
`
