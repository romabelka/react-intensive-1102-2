import gql from 'graphql-tag'

export default gql`
    query EventQuery($id: ID!) {
        event(id: $id) {
            id
            title
            url
            people {
                id 
                firstName
            }
        }
    }
`
