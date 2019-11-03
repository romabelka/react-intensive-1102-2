import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient()

window.apollo = client
window.gql = gql

export default client
