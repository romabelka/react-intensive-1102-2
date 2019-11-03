import React, {useState} from 'react'
import { Query } from 'react-apollo'
import eventQuery from '../graphql/event-query'
import EventTitleForm from "./event-title-form";
import Link from "next/link";

function Event({ id }) {
    return (
        <Query query={eventQuery} variables={{ id }}>
            {
                ({ data, loading }) => {
                    if (!data || loading) return <h2>Loading...</h2>

                    return (
                        <div>
                            <Link href="/">
                                <a>
                                    Main Page
                                </a>
                            </Link>
                            <h5>Current Title: {data.event.title}</h5>
                            <EventTitleForm event={data.event}/>
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
