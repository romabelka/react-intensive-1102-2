import React from 'react'
import {Query} from 'react-apollo'
import Link from 'next/link'
import allEventsQuery from '../graphql/all-events-query'

function EventList() {
    return (
        <Query query={allEventsQuery}>
            {
                ({ data, loading }) => {
                    if (loading || !data) return <h1>Loading...</h1>

                    return (
                        <div>
                            {data.allEvents.map(event => (
                                <div key={event.id}>
                                    <Link href={`/events-initial?id=${event.id}`} as={`/events-initial/${event.id}`}>
                                        <a>
                                            {event.title}
                                        </a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )
                }
            }
        </Query>
    )
}

export default EventList
