import {observable, action} from 'mobx'
import apiService from '../services/api'

class EventsStore {
    @observable events = []

    @action setEvents = events => this.events = events

    fetchEvents = async () => {
        this.setEvents(await apiService.fetchAllEvents())
    }
}

export default new EventsStore()
