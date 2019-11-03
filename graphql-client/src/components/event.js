import React, {useState} from 'react'
import { Query } from 'react-apollo'
import eventQuery from '../graphql/event-query'

function Event({ event }) {
    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)

    return (
        <div>
            <h3>{event.title}</h3>
            <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
            {isOpen && getBody(event)}
        </div>
    )
}

function getBody(event) {
    return (
        <Query query={eventQuery} variables={{ id: event.id }}>
            {
                ({ data, loading }) => {
                    if (!data || loading) return <h2>Loading...</h2>

                    return (
                        <div>
                            <a href={data.event.url}>{data.event.url}</a>
                            <p>
                                {data.event.people.map(person => person.firstName).join('; ')}
                            </p>
                        </div>
                    )
                }
            }
        </Query>
    )
}

export default Event
