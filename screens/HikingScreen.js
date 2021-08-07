import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import LoadingSpinner from '../components/LoadingSpinner';
//import Tiles from '../components/Tiles'
import { useGlobalReducer } from '../Store';

const image = { uri: "https://uilennest.net/xs4all/hiking/media/yoho2003.jpg" };

const HikingScreen = ({ navigation }) => {

    const [ my_state , my_dispatch] = useGlobalReducer()
    const loading = my_state.status === 'fetching'

    // conditional render. Only render the observations when the status is 'fetched'
    let renderData
    let nrOfItems = 0
    if (my_state.status==='data_is_fetched') {
        //renderData = <Tiles data = {my_state.fetched_data} parent = "hiking"/>
        renderData = my_state.fetched_data
        nrOfItems = my_state.fetched_data.length
        console.log(nrOfItems)
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>My Hikes ({nrOfItems})</Text>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
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