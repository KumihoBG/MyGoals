import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Pages from './components/Pages';

const App = () => {
  return (
    <NavigationContainer>
      <Pages />
    </NavigationContainer>
  );
};

export default App;
