import React, { Component } from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import Hello from '../components/hello'
import {observer} from 'mobx-react'
import authStore from '../stores/auth'
import PasswordValidation from "../components/password-validation";

@observer
class AuthScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Auth'
    }

    handleSubmit = () => this.props.navigation.navigate('event-list')

    render() {
        return (
            <View>
                <Text style={[styles.heading, styles.sizing]}>
                    Sign In
                </Text>
                <Hello />
                <View>
                    <Text>Email:</Text>
                    <TextInput value={authStore.email} onChangeText={authStore.setEmail} />
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput value={authStore.password}
                               onChangeText={authStore.setPassword}
                               secureTextEntry
                    />
                </View>
                <PasswordValidation/>
                <Button onPress={this.handleSubmit} title="Sign In"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        color: 'red'
    },
    sizing: {
        fontSize: 20
    }
})

export default AuthScreen
