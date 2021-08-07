import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFetchData } from '../hooks/useFetchData';
//const image = { uri: "https://uilennest.net/static/media/tree2.35a23ddb.png" };

const HomeScreen = ({ navigation }) => {
        useFetchData("https://uilennest.net/homebase/datacenter/items/",{onMount:true})
    return (
        <View>
            <Text style={styles.text}>TwoTreeWood</Text>

            <View style={styles.container}>
                <ImageBackground source={require("../assets/tree2.png")}
                       resizeMode="center"
                       style={styles.image}>

                </ImageBackground>

                <StatusBar style="auto" />

            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: 300,
        height: 200,
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