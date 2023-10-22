import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Maintenance = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Maintenance is going on this app</Text>
            <Text style={styles.text2}>Sorry fo inconvenience</Text>

        </View>
    )
}

export default Maintenance

const styles = StyleSheet.create
    ({
        container:
        {
            marginTop: '20%',
            marginLeft: '15%'
        },
        text1:
        {
            marginBottom: '10%',
            fontSize: 30
        },
        text2:
        {
            fontSize: 20

        }
    })