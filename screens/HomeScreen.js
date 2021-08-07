import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../components/NavigationBar'

const image = { uri: "https://uilennest.net/static/media/tree2.35a23ddb.png" };

const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Two Tree Wood</Text>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.smaller_text}>Welcome in TwoTreeWood</Text>
        </ImageBackground>

        <StatusBar style="auto" />
        <NavigationBar navigation={navigation} />

    </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },

    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },

    smaller_text: {
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});

export default HomeScreen