import React, {useState} from 'react'
import {Mutation} from 'react-apollo'
import eventTitleMutation from '../graphql/event-title-mutation'

function EventTitleForm({ event }) {
    const [title, setTitle] = useState('')
    const handleSubmit = (mutate) => (ev) => {
        ev.preventDefault()
        setTitle('')
        mutate()
    }
    return (
        <Mutation mutation={eventTitleMutation} variables={{ id: event.id, title }}>
            {
                (mutate, { loading }) => {
                    if (loading) return <h2>Submitting title...</h2>

                    return (
                        <form onSubmit={handleSubmit(mutate)}>
                            Set Title: <input
                                value={title}
                                onChange={ev => setTitle(ev.target.value)}
                            />
                            <button type="submit">change title</button>
                        </form>
                    )
                }
            }
        </Mutation>
    )
}

export default EventTitleForm
