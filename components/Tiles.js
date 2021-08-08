import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from 'react-native';
import ItemCard from './cards/ItemCard'

// loop through a list of observations and create a Card with a clickable thumbnail for all of them
export default function Tiles(props) {
        let key = 0
    return (
            <ScrollView>
                {
                    props.data.map((item) => {
                        key++
                        if (item.parent.includes(props.parent)) {
                            return (
                                    <ItemCard key = {key} item = {item}/>
                            );
                        }})
                }
            </ScrollView>
    );

}

