import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import authStore from '../stores/auth'
import {observer} from "mobx-react";

@observer
class PasswordValidation extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 'rendering PasswordValidation')
        return (
            <View>
                <Text>
                    {authStore.isValidPassword ? 'Valid' : 'Invalid'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})

export default PasswordValidation
