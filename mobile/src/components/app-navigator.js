import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthScreen from "../screens/auth";
import EventList from "../screens/event-list";

export default createAppContainer(createStackNavigator({
    'auth': {
        screen: AuthScreen
    },
    'event-list': {
        screen: EventList,
        navigationOptions: {
            title: 'Event List'
        }
    }
}))
