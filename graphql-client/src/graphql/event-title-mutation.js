import gql from 'graphql-tag'

export default gql`
    mutation EventTitleMutation($title: String!, $id: ID!) {
        eventTitle(title: $title, id: $id) {
            id title
        }
    }
`
