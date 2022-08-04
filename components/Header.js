import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Goals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#aecdfb',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default Header;
