import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import NavigationBar from '../components/NavigationBar'

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <NavigationBar navigation={navigation} />

            <Text style={styles.h5}>(c) 2021 - Nico Vermaas</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,

    },

    h5: {
        color: "black",
        fontSize: 22,
        lineHeight: 40,

        textAlign: "center",
        //backgroundColor: "white"
    },

});

export default AboutScreen