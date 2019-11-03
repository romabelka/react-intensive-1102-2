import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import EventList from './components/event-list'
import client from './apollo'

ReactDOM.render(
    <ApolloProvider client={client}>
        <EventList />
    </ApolloProvider>
    , document.getElementById('root'))
