import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {observer} from "mobx-react";
import authStore from '../stores/auth'

@observer
class PasswordValidation extends Component {
    static propTypes = {

    };

    render() {
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
