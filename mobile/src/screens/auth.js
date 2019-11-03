import React, { Component } from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import Hello from '../components/hello'

class AuthScreen extends Component {
    static propTypes = {

    };

    state = {
        email: '',
        password: ''
    }

    handleEmailChange = email => this.setState({ email })
    handlePasswordChange = password => this.setState({ password })
    handleSubmit = () => console.log(this.state)

    render() {
        return (
            <View>
                <Text>Sign In</Text>
                <Hello />
                <View>
                    <Text>Email:</Text>
                    <TextInput value={this.state.email} onChangeText={this.handleEmailChange} />
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput value={this.state.password}
                               onChangeText={this.handlePasswordChange}
                               secureTextEntry
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Sign In"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})

export default AuthScreen
