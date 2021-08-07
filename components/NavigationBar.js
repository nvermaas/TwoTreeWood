import React from 'react';
import { View, Button } from 'react-native';

const NavigationBar = (props) => {
    return (
        <View>
            <Button
                title="Home"
                onPress={() =>
                    props.navigation.navigate('Home', { name: 'Home' })
                }
            />

            <Button
                title="Hiking"
                onPress={() =>
                    props.navigation.navigate('Hiking', { name: 'Hiking' })
                }
            />

            <Button
                title="About"
                onPress={() =>
                    props.navigation.navigate('About', { name: 'About' })
                }
            />
        </View>
    );
};

export default NavigationBar