import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

import Tiles from '../components/Tiles'
import { useGlobalReducer } from '../Store';

const image = { uri: "https://uilennest.net/data_on_yggdrasil/astrobase/data/191231001/3836665_annotated_grid.jpg" };

const AstronomyScreen = ({ navigation }) => {

    const [ my_state , my_dispatch] = useGlobalReducer()
    const loading = my_state.status === 'fetching'

    // conditional render. Only render the observations when the status is 'fetched'
    let renderData

    if (my_state.status==='data_is_fetched') {
        renderData = <Tiles data = {my_state.fetched_data} parent = "astronomy"/>
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
            {renderData}
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