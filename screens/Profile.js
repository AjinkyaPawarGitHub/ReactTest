// Profile.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = (route) => {
    const name = route.params?.email || 'Default E-mail';



    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/profile.jpeg')} />
            <Text>{name}</Text>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 100,
        marginRight: 50
    },
    profilePhoto: {
        width: 50,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 50,

    },

});

export default Profile;
