import React, { Component } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import eventsStore from '../stores/events'
import {observer} from "mobx-react";

@observer
class EventList extends Component {
    static propTypes = {

    };

    componentDidMount() {
        eventsStore.fetchEvents()
    }

    render() {
        return (
            <FlatList
                data = {eventsStore.events}
                keyExtractor = {event => event.id}
                renderItem = {({ item }) => <Text key={item.id}>
                    {item.title}
                </Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
})

export default EventList
