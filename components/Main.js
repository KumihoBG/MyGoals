import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

const Main = ({ navigation }) => {
    const [text, onChangeText] = useState();

    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../images/goals.png')} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.quotes}>"Setting goals is the first step in turning the invisible into the visible."</Text>
                <Text style={styles.text}>Tony Robbins</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    // eslint-disable-next-line no-shadow
                    onChangeText={text => onChangeText(text)}
                    value={text}
                    underlineColorAndroid="transparent"
                />
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={() => navigation.navigate('Profile', { name: `${text}` })}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 0,
    },
    infoContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 30,
        borderTopColor: '#aecdfb',
        borderTopWidth: 3,
    },
    image: {
        height: 1000,
        width: 1000,
    },
    quotes: {
        fontSize: 20,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 40,
        fontStyle: 'italic',
    },
    text: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 15,
        textAlign: 'right',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 0,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    input: {
        height: 45,
        borderColor: '#aecdfb',
        borderWidth: 1,
        padding: 5,
        paddingBottom: 10,
        fontSize: 18,
        margin: 10,
        fontFamily: 'Roboto',
        textAlign: 'center',
        borderRadius: 10,
        placeholderTextColor: '#aecdfb',
        lineHeight: 18,
    },
    button: {
        height: 45,
        borderColor: '#aecdfb',
        borderWidth: 1,
        padding: 5,
        paddingBottom: 10,
        fontSize: 18,
        margin: 30,
        fontFamily: 'Roboto',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#aecdfb',
        color: '#000000',
        lineHeight: 18,
    },
});

export default Main;
