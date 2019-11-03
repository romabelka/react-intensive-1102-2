const events = require('../mocks/events')
const people = require('../mocks/people')

module.exports = {
    Query: {
        allEvents: () => new Promise(resolve => setTimeout(
            () => resolve(Object.values(events))
        , 500)),
    }
}
