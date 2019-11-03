const events = require('../mocks/events')
const people = require('../mocks/people')

module.exports = {
    Query: {
        allEvents: () => new Promise(resolve => setTimeout(
            () => resolve(Object.values(events))
        , 500)),
    },
    Event: {
        id: ({ _id }) => _id,
        firstName: ({ name }) => name,
        people: ({ peopleIds }) => peopleIds
            && peopleIds.map(id => people.find(person => person.id === id))
    }
}
