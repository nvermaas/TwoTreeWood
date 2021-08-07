import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import NavigationBar from '../components/NavigationBar'

const image = { uri: "https://uilennest.net/data_on_yggdrasil/astrobase/data/191231001/3836665_annotated_grid.jpg" };

const AstronomyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Astro</Text>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>
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
export default AstronomyScreen