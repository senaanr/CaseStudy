import React from 'react';
 import {SafeAreaView, StatusBar, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Router from './src/router';
import LoginStack from './src/router/LoginStack';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';


 const App = () => {
   const isDarkMode = useColorScheme()  === 'dark';

   const backgroundStyle ={
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
     flex : 1
   };

   return (
     <View style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <LoginStack />
      </View>
   );
  }                   
 export default App;










