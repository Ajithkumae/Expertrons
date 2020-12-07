import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { Homestack } from './app/router';
import store from './app/store';
import Home from './app/Views/home';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Homestack />
      </NavigationContainer>
    </Provider>

  );
};
export default App;
