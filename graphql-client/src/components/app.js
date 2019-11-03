import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Event from "./event";

const query = gql`
    query {
        allEvents {
            id title
        }
    }
`

function App() {
    return (
        <Query query={query}>
            {
                ({ data, loading }) => {
                    if (loading || !data) return <h1>Loading...</h1>

                    return (
                        <div>
                            {data.allEvents.map(event => <Event key={event.id} event={event} />)}
                        </div>
                    )
                }
            }
        </Query>
    )
}

export default App
