import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'lightblue' }}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{ height: 40, marginLeft: 10 }}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
       <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
            {() => <HomeScreen searchValue={searchValue} />}
          </Stack.Screen>
          <Stack.Screen
            name="ProductDetails"
            component={ProductScreen}
            options={{ title: 'Product Details' }} // Add the screen title here if needed
          />
    </Stack.Navigator>
  );
};

export default HomeStack;