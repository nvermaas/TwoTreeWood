import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

const image = { uri: "https://uilennest.net/xs4all/hiking/media/yoho2003.jpg" };

const HikingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Hikes</Text>
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

export default HikingScreen