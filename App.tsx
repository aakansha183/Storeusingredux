import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Counter1Screen from './src/screens/Counter1Screen';
import store from './src/redux/store';
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Counter1">
          <Stack.Screen name="Counter1" component={Counter1Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
