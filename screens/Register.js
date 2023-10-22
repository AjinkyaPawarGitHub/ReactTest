import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Register = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                placeholder="Enter name"
                onChangeText={text => setName(text)}
            />

            <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter email"
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                value={password}
                placeholder="Enter password"
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <Button
                title="Register"
                onPress={() => {
                    navigation.navigate('Login', { email })
                }}
            />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create
    ({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
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