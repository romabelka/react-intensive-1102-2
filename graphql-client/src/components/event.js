import React, {useState} from 'react'

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

}

export default Event
