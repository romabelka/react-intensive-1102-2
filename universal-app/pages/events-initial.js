import React from 'react'
import App from "../components/App";
import fetch from 'isomorphic-unfetch'
import Link from "next/link";

function Events({ event }) {
    return (
        <App>
        <div>
            <h3>Event Initial Page</h3>
            <div>
                <Link href="/">
                    <a>
                        Main Page
                    </a>
                </Link>
                <h5>Current Title: {event.title}</h5>
                <a href={event.url}>{event.url}</a>
                <p>
                    {event.people.map(person => person.firstName).join('; ')}
                </p>
            </div>
        </div>
        </App>
    )
}

Events.getInitialProps = async ({ query: { id } }) => {
    const response = await fetch('http://localhost:5000' , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `query Event($id: ID!) {
                 event(id: $id) {
                    id
                    title
                    url
                    people {
                        id
                        firstName
                    }
                    
                    } 
                }`,
            variables: { id }
        })
    })

    const { data } = await response.json()

    return { event: data.event }
}

export default Events
