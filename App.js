import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Singin from './src/Screens/Singin';
import Signup from './src/Screens/Signup';
import Welcome from './src/Screens/Welcome';
import Modal from './src/Screens/Modal';
// import Field from './src/Screens/Field';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Singin"
          component={Singin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Singup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Field"
          component={Field}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
