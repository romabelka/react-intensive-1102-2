import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthScreen from "../screens/auth";
import Hello from './hello'

export default createAppContainer(createStackNavigator({
    'auth': {
        screen: AuthScreen
    },
    'event-list': {
        screen: Hello,
        navigationOptions: {
            title: 'Event List'
        }
    }
}))
