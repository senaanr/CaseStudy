import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../components/Auth/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import ProductScreen from '../screens/ProductScreen';
import Router from '.';


const Stack = createStackNavigator();

const LoginStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
            {() => <HomeScreen searchValue={searchValue} />}
          </Stack.Screen>
          <Stack.Screen
            name="ProductDetails"
            component={ProductScreen}
            options={{ title: 'Product Details' }} // Add the screen title here if needed
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default LoginStack;
