import React from 'react'
import Event from "../components/event";
import App from "../components/App";
import {withApollo} from "../lib/apollo";

function Events({ url: { query: { id } } }) {
    return (
        <App>
        <div>
            <h3>Event Page</h3>
            <Event id={id}/>
        </div>
        </App>
    )
}

export default withApollo(Events)
