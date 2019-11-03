import React from 'react'
import {Query} from 'react-apollo'
import Event from "./event";
import allEventsQuery from '../graphql/all-events-query'

function EventList() {
    return (
        <Query query={allEventsQuery}>
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

export default EventList
