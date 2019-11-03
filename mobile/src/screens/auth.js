import React, { Component } from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import Hello from '../components/hello'

class AuthScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Auth'
    }

    state = {
        email: '',
        password: ''
    }

    handleEmailChange = email => this.setState({ email })
    handlePasswordChange = password => this.setState({ password })
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
    heading: {
        color: 'red'
    },
    sizing: {
        fontSize: 20
    }
})

export default AuthScreen
