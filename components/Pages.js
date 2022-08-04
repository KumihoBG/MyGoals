import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Main from './Main';
import Profile from './Profile.js';

const Stack = createNativeStackNavigator();

const Pages = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    header: () => <Header />,
                }}
            />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

export default Pages;
