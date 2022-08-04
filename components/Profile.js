import React from 'react';
import { View, Text } from 'react-native';

const Profile = ({ navigation, route }) => {
  return (
    <View>
        <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default Profile;
