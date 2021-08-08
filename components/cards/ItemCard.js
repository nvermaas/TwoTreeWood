import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';

// display a single archive on a card
export default function ItemCard(props) {
    let image = { uri: props.item.url_image };
    return (

        <View style={styles.container}>
            <Text style={styles.h3}>{props.item.name}</Text>

            <Image source={image} style={styles.image}></Image>
            <Text style={styles.h5}>{props.item.description}</Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        width: 250,
        height: 180,
    },

    h3: {
        color: "black",
        fontSize: 32,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "center",
        //backgroundColor: "white"
    },

    h5: {
        color: "black",
        fontSize: 18,
        lineHeight: 30,
        textAlign: "center",
        //backgroundColor: "white"
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

