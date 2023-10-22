import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation, route }) => {
    const name = route.params?.email || 'Default Name';

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={text => setEmail(text)}


                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry />
                <Button
                    title="Login"
                    onPress={() => {
                        navigation.navigate('Profile', { email })

                    }}
                />
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create
    ({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input:
        {
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            paddingHorizontal: 14,

        },
        link: {
            color: 'blue',
        },
    })